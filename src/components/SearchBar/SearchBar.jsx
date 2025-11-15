import { useEffect, useState } from "react"
import { getLocation } from "../../services/weather.service";
import { useDebounce } from "../../hooks/useDebounce";

import './SearchBar.scss';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [citiesList, setCitiesList] = useState([]);

    const changeInputHandler = (event) => setSearchQuery(event.target.value)

    const debouncedSearchQuery = useDebounce(searchQuery, 400)

    useEffect(() => {
        if (!debouncedSearchQuery.trim()) {
            setCitiesList([])
            return
        }

        getLocation(debouncedSearchQuery).then(setCitiesList)
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
            <SearchList citiesList={citiesList}/>
        </div>
    )
}

const SearchList = ({ citiesList }) => {
    // console.log(citiesList)

    return (
        <ul className="search-list">
            {citiesList.map((city, idx) => {
                return (
                    <SearchListItem 
                        city={city} 
                        key={idx}
                    />
                )
            })}
        </ul>
    )
}

const SearchListItem = ({ city }) => {
    const { name, state, country } = city;

    return (
        <li>
            {/* {name + " | " + state + " | " + country} */}
            {country + " | " + state + " | " + name}
        </li>
    )
}