import "dotenv/config";
import jwt from "jsonwebtoken";

const sign = (userData) => {
  const token = jwt.sign(userData, process.env.JWT_KEY, {
    expiresIn: '10s'
  });
  return token;
};

const verifyAccess = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY);
  } catch (e) {
    return null;
  }
};

const signRefresh = (userData) => {
  const token = jwt.sign(userData, process.env.JWT_KEY_REFRESH);
  return token;
};

const verifyRefresh = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_KEY_REFRESH);
  } catch (e) {
    return null;
  }
};

export const jwtService = {
  sign,
  verifyAccess,
  signRefresh,
  verifyRefresh,
};
