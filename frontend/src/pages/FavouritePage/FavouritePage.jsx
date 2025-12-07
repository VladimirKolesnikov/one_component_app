import { useEffect, useState } from 'react';
import { SandBox } from '../../../Sandbox2';
import './FavouritePage.scss';
import { getCoords } from '../../services/coords.service';
import { WeatherCard } from '../../components/WeatherCard';

export const FavouritePage = () => {

    const [coords, setCoords] = useState([]);

    useEffect(() => {
        getCoords().then(setCoords)
    }, [])

    return (
        <div>
            Favourite Page
            <div>
                <SandBox />
            </div>

            <ul>
                {coords.map(coordinate => {
                const { id, coord } = coordinate;
                return (
                    <li key={id}>
                        <WeatherCard currentCoord={coord} />
                    </li>
                )
            })}
            </ul>
        </div>
    )
}
