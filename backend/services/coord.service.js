import { v4 as uuidv4 } from 'uuid';

let list = [
    { id: "1", coord: { lat: 47.8507859, lon: 35.1182867 }},
    { id: "2", coord: { lat: 50.2598298, lon: 28.6692345 }},
    { id: "3", coord: { lat: 48.6223732, lon: 22.3022569 }},
    { id: "4", coord: { lat: 48.4680221, lon: 35.0417711 }},
]

export const getAll = () => {
    return list;
};

export const getById = (id) => {
    return list.find(item => item.id === id)
}

export const create = (coord) => {
    const newCoord = {
        id: uuidv4(),
        coord
    }

    list.push(newCoord)

    return newCoord
}

export const remove = (id) => {
    list = list.filter(item => item.id !== id)
};
