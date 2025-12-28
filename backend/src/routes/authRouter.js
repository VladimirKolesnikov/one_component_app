import express from "express";
import { authController } from "../controllers/authController.js";
import { errorCatcher } from "../utils/errorCatcher.js";

const authRouter = express.Router();

authRouter.post("/registration", errorCatcher(authController.register));
authRouter.get(
  "/activation/:activationToken",
  errorCatcher(authController.activate),
);
authRouter.post("/login", errorCatcher(authController.login));
// router.post('/logout', authController)
// router.get('/refresh', authController)

export { authRouter };
