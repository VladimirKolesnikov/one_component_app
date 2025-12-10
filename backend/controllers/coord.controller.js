import * as coordService from './../services/coord.service.js';


export const get = (req, res) => {
    res.send(coordService.getAll())
}

export const create = (req, res) => {
    const { coord } = req.body

    if (!coord) {
        res.sendStatus(422)
    }

    const newCoord = coordService.create(coord)

    res.statusCode = 201;
    res.send(newCoord)
}

export const remove = (req, res) => {
    const { id } = req.params

    if (!coordService.getById(id)) {
        res.sendStatus(404)
        return
    }

    coordService.remove(id)

    res.sendStatus(204)
}
