import './HomePage.scss';
import { WeatherCard } from '../../components/WeatherCard';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

export const HomePage = () => {
    const [currentCoord, setCurrentCoord] = useState(null);

    const changeCoord = (enteredCoord) => {
        setCurrentCoord(enteredCoord)
    }

    useEffect(() => {
        fetch('/api/localCoord.json')
            .then(responce => responce.json())
            .then(setCurrentCoord)
    }, [])

    return (
        <div className="container">
            <SearchBar changeCoord={changeCoord}/>
            <WeatherCard currentCoord={currentCoord}/>
        </div>
    )
};
