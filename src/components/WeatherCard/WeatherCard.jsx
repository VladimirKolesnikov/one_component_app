import './WeatherCard.scss';
import { TempChart } from '../TempChart';

import { useEffect, useState } from 'react';
import { makeDailyForecast, makeWeeklyForecast } from '../../helpers/weatherHelpers';
import { getWeaterList } from '../../services/weather.service';


export const Block = ({ currentCoord }) => {
    // console.log(currentCoord)
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        if(!currentCoord) return

        getWeaterList(currentCoord)
            .then(setWeatherList)
    }, [currentCoord])

    return (
        <div className='WeatherCard'>
            {currentCoord && (
                <h3>{`lat: ${currentCoord.lat}, lon: ${currentCoord.lon}`}</h3>
            )}
            <TempChart weatherList={makeDailyForecast(weatherList)} />
            <TempChart weatherList={makeWeeklyForecast(weatherList)} />
        </div>
    )
};
