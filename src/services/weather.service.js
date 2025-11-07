
const API_BASE = 'https://api.openweathermap.org/data/2.5/forecast';

const params = new URLSearchParams({
    lat: 47,
    lon: 35,
    appid: import.meta.env.VITE_API_ID,
    // appid: '9a609c0ca09ce1f3734dd3d9a62e32a6',
    units: 'metric',
});

const getWeaterList = () => {
    console.log('from api', import.meta.env.VITE_API_ID)
    return fetch(`${API_BASE}?${params}`)
        .then(responce => responce.json())
        .then(weatherJson => weatherJson.list)
};

export { getWeaterList }
