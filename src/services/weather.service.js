
const API_ID = '9a609c0ca09ce1f3734dd3d9a62e32a6';
const API_BASE = 'https://api.openweathermap.org/data/2.5/forecast';

const params = new URLSearchParams({
    lat: 47,
    lon: 35,
    appid: API_ID,
    units: 'metric',
});

const getWeaterList = () => {
    console.log('from api')
    return fetch(`${API_BASE}?${params}`)
        .then(responce => responce.json())
        .then(weatherJson => weatherJson.list)
};

export { getWeaterList }
