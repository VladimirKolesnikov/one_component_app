import './LoginPage.scss';

export const LoginPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleReset = () => {
        //
    }

    const handleEmailChange = (event) => {
        //
    }

    return (
        <form
            onSubmit={handleSubmit}
            onReset={handleReset}
            className='login-form'
        >
            <label htmlFor='email-field'>email</label>
            <input onChange={handleEmailChange} id='email-field' type='email' />

            <label htmlFor='psw-field'>password</label>
            <input id='psw-field' type='password' />

            <div>
                <button type='submit'>sign up</button>
                <button type='reset'>cansel</button>
            </div>

        </form>
    )
}
