import express from "express";
import * as coordController from "../controllers/coordController.js";
import { errorCatcher } from "../utils/errorCatcher.js";

const coordRouter = express.Router();

coordRouter.get("/", errorCatcher(coordController.get));
coordRouter.post("/", errorCatcher(coordController.create));
coordRouter.delete("/:id", errorCatcher(coordController.remove));

export { coordRouter };
