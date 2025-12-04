import './WeatherCard.scss';
import { TempChart } from '../TempChart';

import { useEffect, useState } from 'react';
import { makeDailyForecast, makeWeeklyForecast } from '../../helpers/weatherHelpers';
import { getCityByLocation, getWeaterList } from '../../services/weather.service';


export const WeatherCard = ({ currentCoord }) => {
    const [weatherList, setWeatherList] = useState([]);
    const [city, setCity] = useState(null);
    const [viewMode, setViewMode] = useState('daily');

    useEffect(() => {
        if(!currentCoord) return

        getWeaterList(currentCoord)
            .then(setWeatherList)

        getCityByLocation(currentCoord)
            .then(setCity)
    }, [currentCoord])

    return (
        <div className='WeatherCard'>
            <WeatherCardTopbar viewMode={viewMode} setViewMode={setViewMode}/>
            {city && (() => {
                const localCityName = city.en ? city.en : Object.values(city)[0]
                return <h3>{`${localCityName}`}</h3>
            })()}

            {viewMode === 'daily' && (
                <TempChart weatherList={makeDailyForecast(weatherList)} />
            )}

            {viewMode === 'weekly' && (
                <TempChart weatherList={makeWeeklyForecast(weatherList)} />
            )}
        </div>
    )
};

const WeatherCardTopbar = ({ viewMode, setViewMode }) => {
    return (
        <div>
            <button
                onClick={() => {
                    setViewMode(prev => prev === 'daily' ? 'weekly' : 'daily')
                }}
            >
                {viewMode === 'daily' ? 'show weekly' : 'show daily'}
            </button>
            <button>add to favourite</button>
            <button>close</button>
        </div>
    )
}