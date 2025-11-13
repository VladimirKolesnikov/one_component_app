import { useEffect, useState } from "react"
import { getLocation } from "../../services/weather.service";

export const SearchBar = () => {
    const submitHandler = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    const [searchQuery, setSearchQuery] = useState('')
    const [citiesList, setCitiesList] = useState([]);

    const changeInputHandler = (event) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
        if (!searchQuery.trim()) {
            setCitiesList([])
            return
        }

        getLocation(searchQuery).then(setCitiesList)
    }, [searchQuery])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    value={searchQuery}
                    onChange={changeInputHandler}
                ></input>
                <button type="sumbit">search</button>
            </form>
            <SearchList citiesList={citiesList}/>
        </div>
    )
}

const SearchList = ({ citiesList }) => {
    // console.log(citiesList)
    return citiesList.map(city => {
        return (
        <div>
            <SearchListItem city={city} key={city.lat + city.lon}/>
        </div>
    )
    })
}

const SearchListItem = ({ city }) => {
    const { name, state, country } = city;

    return (
        <div>
            {name + " | " + state + " | " + country}
        </div>
    )
}