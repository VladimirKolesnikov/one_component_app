import './Block.scss';
import { TempChart } from '../TempChart';

import weatherDataFromServer from '../../../public/api/weatherList.json';
import { useState } from 'react';
import { normalizeWeatherItem } from '../../helpers/weatherHelpers';


export const Block = () => {
    const weatherList = weatherDataFromServer.list
    const [normalizedWeatherList] = useState(weatherList.map(normalizeWeatherItem));

    console.log(normalizedWeatherList)

    return (
        <div className='block'>
            <TempChart weatherList={normalizedWeatherList.slice(0, 5)} />
        </div>
    )
};
