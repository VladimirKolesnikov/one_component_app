import { useEffect, useState } from "react"
import { getLocation } from "../../services/weather.service";

export const SearchBar = () => {
    const [value, setValue] = useState('')
    const [citiesList, setCitiesList] = useState([]);

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    const changeInputHandler = (event) => {
        setValue(event.target.value)
    }

    useEffect(() => {
        if(value) {
            getLocation(value).then(setCitiesList)
            // console.log(citiesList)
        }
    }, [value])

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input 
                    type="text"
                    value={value}
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