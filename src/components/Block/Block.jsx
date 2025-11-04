import './Block.scss';
import { TempChart } from '../TempChart';

import weatherDataFromServer from '../../../public/api/weatherList.json';
import { useState } from 'react';
import { makeDailyForecast, makeWeeklyForecast } from '../../helpers/weatherHelpers';


export const Block = () => {
    const weatherListFromServer = weatherDataFromServer.list
    const [weatherList] = useState(weatherListFromServer);

    return (
        <div className='block'>
            <TempChart weatherList={makeDailyForecast(weatherList)} />
            {/* <TempChart weatherList={makeWeeklyForecast(weatherList)} /> */}
        </div>
    )
};
