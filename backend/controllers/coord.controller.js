import { coordService } from './../services/coord.service.js'


export const get = async (req, res) => {
    const userId = req.user.id
    const coords = await coordService.getAllCoordsByUserId(userId)
    res.send(coords.map(coordService.normalizeCoord))
}

export const create = async (req, res) => {
    const coord = req.body
    const userId = req.user.id

    if (!coord) {
        res.sendStatus(422)
    }

    const newCoord = await coordService.createCoord(coord, userId)

    res.statusCode = 201;
    res.send(coordService.normalizeCoord(newCoord))
}

export const remove = async (req, res) => {
    const { id } = req.params
    const userId = req.user.id

    const deletedCount = await coordService.removeCoord(id, userId)

    if (deletedCount === 0) {
        res.sendStatus(404)
        return
    }

    res.sendStatus(204)
}
