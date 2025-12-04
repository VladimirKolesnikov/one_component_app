import { useEffect, useState } from "react"
import { getLocationByCity } from "../../services/weather.service";
import { useDebounce } from "../../hooks/useDebounce";

import './SearchBar.scss';

export const SearchBar = ({ changeCoord }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [citiesList, setCitiesList] = useState([]);

    const selectCityHandler = (newCoord) => {
        changeCoord(newCoord)
    }

    const changeInputHandler = (event) => setSearchQuery(event.target.value)
    const debouncedSearchQuery = useDebounce(searchQuery, 400)

    useEffect(() => {
        if (!debouncedSearchQuery.trim()) {
            setCitiesList([])
            return
        }

        getLocationByCity(debouncedSearchQuery).then(setCitiesList)
    }, [debouncedSearchQuery])

    return (
        <div className="search-bar">
            <form onSubmit={(e) => e.preventDefault()}>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={changeInputHandler}
                />
                <button type="submit">search</button>
            </form>
            <SearchList citiesList={citiesList} selectCityHandler={selectCityHandler}/>
        </div>
    )
}

const SearchList = ({ citiesList, selectCityHandler }) => {

    const optionSelectHandler = (i) => {
        const { lat, lon } = citiesList[i]
        console.log(lat, lon)
        selectCityHandler({ lat, lon })
    }

    return (
        <ul className="search-list">
            {citiesList.map((city, idx) => {
                const { name, state, country } = city;
                return (
                    <li
                        key={idx}
                        onClick={(e) => optionSelectHandler(idx)}
                    >
                        {idx + " - " + country + " | " + state + " | " + name}
                    </li>
                )
            })}
        </ul>
    )
}
