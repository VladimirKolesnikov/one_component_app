import { ApiError } from "../exeptions/apiError.js";
import { jwtService } from "../services/jwtService.js";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"] || "";
  const [, accessToken] = authHeader.split(" ");

  if (!authHeader || !accessToken) {
    throw ApiError.unauthorized({
      message: "Token is required",
    });
  }

  const userData = jwtService.verifyAccess(accessToken);
  const { id, email } = userData;

  if (!userData) {
    throw ApiError.unauthorized({
      message: "Invalid token",
    });
  }

  req.user = { id, email };
  
  next();
};
