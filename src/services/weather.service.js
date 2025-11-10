
const API_BASE = 'https://api.openweathermap.org';

const defaultParams = {
    appid: import.meta.env.VITE_API_ID,
    // appid: '9a609c0ca09ce1f3734dd3d9a62e32a6',
};

const getWeaterList = () => {
    const params = new URLSearchParams({
        ...defaultParams,
        lat: 47,
        lon: 35,
        units: 'metric',
    })

    return fetch(`${API_BASE}/data/2.5/forecast?${params}`)
        .then(responce => responce.json())
        .then(weatherJson => weatherJson.list)
};

const getLocation = (q) => {
    console.log(q)
    const params = new URLSearchParams({
        ...defaultParams,
        limit: 100,
        q,
    })

    return fetch(`${API_BASE}/geo/1.0/direct?${params}`)
        .then(responce => responce.json())
};

export { getWeaterList, getLocation }
