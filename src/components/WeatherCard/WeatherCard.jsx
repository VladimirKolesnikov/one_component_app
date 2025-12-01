import './WeatherCard.scss';
import { TempChart } from '../TempChart';

import { useEffect, useState } from 'react';
import { makeDailyForecast, makeWeeklyForecast } from '../../helpers/weatherHelpers';
import { getCityByLocation, getWeaterList } from '../../services/weather.service';


export const WeatherCard = ({ currentCoord }) => {
    // console.log(currentCoord)
    const [weatherList, setWeatherList] = useState([]);
    const [city, setCity] = useState('abc');

    useEffect(() => {
        if(!currentCoord) return

        getWeaterList(currentCoord)
            .then(setWeatherList)

        getCityByLocation(currentCoord)
            .then(setCity)
    }, [currentCoord])

    return (
        <div className='WeatherCard'>
            {city && (() => {
                const localCityName = city.en ? city.en : Object.values(city)[0]
                return <h3>{`${localCityName}`}</h3>
            })()}
            <TempChart weatherList={makeDailyForecast(weatherList)} />
            <TempChart weatherList={makeWeeklyForecast(weatherList)} />
        </div>
    )
};
