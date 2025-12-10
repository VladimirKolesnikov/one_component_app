import express from 'express';
import * as coordController from './../controllers/coord.controller.js';


const router = express.Router();

router.get('/', coordController.get)
router.post('/', express.json(), coordController.create)
router.delete('/:id', coordController.remove)

export { router }
