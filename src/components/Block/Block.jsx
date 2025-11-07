import './Block.scss';
import { TempChart } from '../TempChart';

import { useEffect, useState } from 'react';
import { makeDailyForecast, makeWeeklyForecast } from '../../helpers/weatherHelpers';
import { getWeaterList } from '../../services/weather.service';


export const Block = () => {
    const [weatherList, setWeatherList] = useState([]);

    useEffect(() => {
        getWeaterList()
            .then(setWeatherList)
    }, [])

    
console.log('from block')
    return (
        <div className='block'>
            <TempChart weatherList={makeDailyForecast(weatherList)} />
            <TempChart weatherList={makeWeeklyForecast(weatherList)} />
        </div>
    )
};
