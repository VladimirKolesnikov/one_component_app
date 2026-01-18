import express from "express";
import { authController } from "../controllers/authController.js";
import { errorCatcher } from "../utils/errorCatcher.js";

const authRouter = express.Router();

authRouter.post("/registration", errorCatcher(authController.register));
// authRouter.get(
//   "/activation/:activationToken",
//   errorCatcher(authController.activate),
// );
authRouter.post("/login", errorCatcher(authController.login));
authRouter.get("/refresh", errorCatcher(authController.refresh));
authRouter.get("/logout", errorCatcher(authController.logout));

export { authRouter };
