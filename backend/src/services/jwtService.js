import "dotenv/config";
import jwt from "jsonwebtoken";

const sign = (userData) => {
  const token = jwt.sign(userData, process.env.JWT_KEY);
  return token;
};

const verify = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (e) {
    return null;
  }
};

export const jwtService = {
  sign,
  verify,
};
