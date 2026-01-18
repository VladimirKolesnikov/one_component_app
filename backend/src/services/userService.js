import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import { User } from "../models/User.js";
import { ApiError } from "../exeptions/apiError.js";

const normalizeUser = (user) => {
  const { id, email } = user;
  return { id, email };
};

const registerUser = async (email, password) => {
  const isUserExist = await findByEmail(email);
// console.log('1111111111111111111111111111111111', isUserExist)
  if (isUserExist) {
    // console.log('2222222222222222222222222222222')
    throw ApiError.badRequest({
      message: "User already exists",
      details: {
        email: "User with this email already exists",
      },
    });
  }

  const passwordHash = await bcrypt.hash(password, 10);
  const activationToken = uuidv4();

  const newUser = await User.create({
    email,
    passwordHash,
    activationToken,
  });

  // call email service to send email with activation link
  // for example: emailService.sendEmail(email, activationToken)

  return newUser;
};

const findByEmail = (email) => {
  return User.findOne({ where: { email } });
};

export const userService = {
  normalizeUser,
  registerUser,
  findByEmail,
};
