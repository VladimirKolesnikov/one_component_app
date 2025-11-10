import { useState } from "react"

export const SearchBar = () => {
    const [value, setValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()
        console.log('submit')
    }

    const changeInputHandler = (event) => {
        setValue(event.target.value)
    }

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
        </div>
    )
}
