
export const SandBox = () => {
    const clickHandler = () => {
        console.log('button')
        fetch('http://localhost:3005', { method: 'get' })
            .then(console.log)
}

    return (
        <button
            onClick={clickHandler}
        >the button!</button>
    )
}

