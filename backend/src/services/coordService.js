import { Coord } from "../models/Coord.js";

const normalizeCoord = (coord) => {
  const { id, lat, lon } = coord;
  return {
    id,
    lat,
    lon,
  };
};

const getAllCoordsByUserId = (userId) => {
  return Coord.findAll({
    where: { userId },
  });
};

const createCoord = async (coord, userId) => {
  const { lat, lon } = coord;

  return Coord.create({
    lat,
    lon,
    userId,
  });
};

const removeCoord = (id, userId) => {
  return Coord.destroy({
    where: {
      id,
      userId,
    },
  });
};

export const coordService = {
  normalizeCoord,
  getAllCoordsByUserId,
  createCoord,
  removeCoord,
};
