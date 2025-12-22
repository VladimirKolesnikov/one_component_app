import { Coord } from '../models/Coord.js';

const normalizeCoord = (coord) => {
    const { id, lat, lon } = coord
    return {
        id,
        lat,
        lon,
    }
}

const getAllCoordsByUserId = async (userId) => {
    const coords = await Coord.findAll({
        where: { userId }
    })

    return coords
};

const createCoord = async (coord, userId) => {
    const { lat, lon } = coord
    
    const newCoord = await Coord.create({
        lat,
        lon,
        userId,
    })

    return newCoord
}

const removeCoord = async (id, userId) => {
    const count = await Coord.destroy({
        where: {
            id,
            userId,
        }
    })
console.log(count, 'from remove coord')
    return count
};

export const coordService = {
    normalizeCoord,
    getAllCoordsByUserId,
    createCoord,
    removeCoord,
}
