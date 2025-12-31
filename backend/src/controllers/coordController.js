import { ApiError } from "../exeptions/apiError.js";
import { coordService } from "../services/coordService.js";

const get = async (req, res) => {
  const userId = req.user.id;
  const coords = await coordService.getAllCoordsByUserId(userId);
  res.status(200);
  res.json(coords.map(coordService.normalizeCoord));
};

const create = async (req, res) => {
  const coord = req.body;
  const userId = req.user.id;

  const { lat, lon } = coord;

  if (!lat || !lon) {
    throw ApiError.badRequest({ message: "Wrong coordinates format" })
  }

  const existingCoords = await coordService.getAllCoordsByUserId(userId);

  if (existingCoords.length >= 5) {
    throw ApiError.badRequest({ message: "Maximum number of places reached" })
  }

  const newCoord = await coordService.createCoord(coord, userId);

  res.status(201);
  res.json(coordService.normalizeCoord(newCoord));
};

const remove = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const deletedCount = await coordService.removeCoord(id, userId);

  if (deletedCount === 0) {
    res.status(404);
    res.end();
    return;
  }

  res.status(204);
  res.end();
};

export const coordController = {
  get,
  create,
  remove,
};
