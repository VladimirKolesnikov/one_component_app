
const API_BASE = 'https://api.openweathermap.org';

const defaultParams = {
    appid: import.meta.env.VITE_API_ID,
    // appid: '9a609c0ca09ce1f3734dd3d9a62e32a6',
};

const getWeatherList = (coord = { lat: 0, lon: 0}) => {
    const params = new URLSearchParams({
        ...defaultParams,
        ...coord,
        units: 'metric',
    })

    console.log(coord)

    return fetch(`${API_BASE}/data/2.5/forecast?${params}`)
        .then(responce => responce.json())
        .then(weatherJson => weatherJson.list)
};

const getLocationByCity = (q) => {
    console.log(q)
    const params = new URLSearchParams({
        ...defaultParams,
        limit: 100,
        q,
    })

    return fetch(`${API_BASE}/geo/1.0/direct?${params}`)
        .then(responce => responce.json())
};

const getCityByLocation = (coords) => {
    //geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}
    const params = new URLSearchParams({
        ...defaultParams,
        limit: 10,
        ...coords,
    })

    return fetch(`${API_BASE}/geo/1.0/reverse?${params}`)
        .then(responce => responce.json())
        .then(cityNames => {
            console.log(cityNames, '-cityNames length')
            // add name if not local_names
            return cityNames[0].local_names
        })
}

export { getWeatherList, getLocationByCity, getCityByLocation }
