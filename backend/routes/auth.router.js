import express from 'express';
import * as authController from './../controllers/auth.controller.js';
import { errorCatcher } from '../utils/errorCatcher.js'


const authRouter = express.Router();

authRouter.post('/registration', errorCatcher(authController.register))
// router.get('/activation/:activationToken', authController)
authRouter.post('/login', errorCatcher(authController.login))
// router.post('/logout', authController)
// router.get('/refresh', authController)

export { authRouter }
