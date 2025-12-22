import express from 'express';
import * as authController from './../controllers/auth.controller.js';


const authRouter = express.Router();

authRouter.post('/registration', authController.register)
// router.get('/activation/:activationToken', authController)
authRouter.post('/login', authController.login)
// router.post('/logout', authController)
// router.get('/refresh', authController)

export { authRouter }
