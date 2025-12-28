import bcrypt from "bcrypt";
// import { v4 as uuidv4 } from 'uuid';
import { jwtService } from "../services/jwtService.js";
import { userService } from "../services/userService.js";
import { ApiError } from "../exeptions/apiError.js";
import { validateEmail, validatePassword } from "../utils/validator.js";

const register = async (req, res) => {
  const { email, password } = req.body;
  const newUser = await userService.registerUser(email, password);
  const normalizedUser = userService.normalizeUser(newUser);

  const validationResults = {
    email: validateEmail(email),
    password: validatePassword(password),
  };

  if (validationResults.email || validationResults.password) {
    throw ApiError.badRequest({
      message: "Bad request",
      details: validationResults,
    });
  }

  res.status(201);
  res.json(normalizedUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.findByEmail(email);

  if (!user) {
    throw ApiError.badRequest({
      message: "User with this email does not exist",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    throw ApiError.badRequest({
      message: "Password is wrong",
    });
  }

  const normalizedUser = userService.normalizeUser(user);
  const accessToken = jwtService.sign(normalizedUser);

  res.json({
    ...normalizedUser,
    accessToken,
  });
};

const activate = (req, res) => {
  const { activationToken } = req.params;
  // set the user's activationToken to null
  res.end();
};

export const authController = {
  register,
  login,
  activate,
};
