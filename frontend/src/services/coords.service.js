
const API_BASE = 'http://localhost:3005/coords';

const getCoords = () => {
    return fetch(`${API_BASE}`)
        .then(responce => {
            const jsn = responce.json()
            return jsn;
        })
};

export { getCoords };
