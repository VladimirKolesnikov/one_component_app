import { ApiError } from "../exeptions/apiError.js";

export const errorMiddleware = (error, req, res, next) => {
  if (error instanceof ApiError) {
    res.status(error.status);
    res.json({
      message: error.message,
      details: error.details,
    });
  }

  res.status(500);
  res.json({
    message: "Server error",
  });

  next();
};
