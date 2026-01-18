import bcrypt from "bcrypt";
import { jwtService } from "../services/jwtService.js";
import { userService } from "../services/userService.js";
import { tokenService } from "../services/tokenService.js";
import { ApiError } from "../exeptions/apiError.js";
import { validateEmail, validatePassword } from "../utils/validator.js";

const attachRefreshTokenToResponce = (res, user) => {
  const refreshToken = jwtService.signRefresh(user)

  res.cookie('refreshToken', refreshToken, {
    maxAge: 10 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  });

  return refreshToken;
};

const register = async (req, res) => {
  const { email, password } = req.body;

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

  const newUser = await userService.registerUser(email, password);
  const normalizedUser = userService.normalizeUser(newUser);

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

  const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordCorrect) {
    throw ApiError.badRequest({
      message: "Password is wrong",
    });
  }

  const normalizedUser = userService.normalizeUser(user);
  const accessToken = jwtService.sign(normalizedUser);
  const refreshToken = attachRefreshTokenToResponce(res, normalizedUser);
  await tokenService.save(normalizedUser.id, refreshToken);

  res.status(200)
  res.json({
    ...normalizedUser,
    accessToken,
  });
};

const refresh = async (req, res) => {
  const { refreshToken } = req.cookies;
  const user = jwtService.verifyRefresh(refreshToken);
  const existingToken = await tokenService.getTokenByToken(refreshToken);
  
  if(!user || !existingToken) {
    throw ApiError.unauthorized({ message: 'Invalid token' });
  }

  const accessToken = jwtService.sign(user);
  const newRefreshToken = attachRefreshTokenToResponce(res, user);
  await tokenService.save(normalizedUser.id, newRefreshToken);

  res.status(200)
  res.json({
    ...user,
    accessToken,
  });
}

// const activate = (req, res) => {
//   const { activationToken } = req.params;
//   // set the user's activationToken to null
//   res.end();
// };

const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const userData = jwtService.verifyRefresh(refreshToken);
  res.clearCookie('refreshToken');

  if (userData) {
    await tokenService.remove(userData.id);
  }

  res.status(204);
  res.end();
};

export const authController = {
  register,
  login,
  refresh,
  // activate,
  logout,
};
