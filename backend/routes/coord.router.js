import express from 'express';
import * as coordController from './../controllers/coord.controller.js';


const coordRouter = express.Router();

coordRouter.get('/', coordController.get)
coordRouter.post('/', coordController.create)
coordRouter.delete('/:id', coordController.remove)

export { coordRouter }
