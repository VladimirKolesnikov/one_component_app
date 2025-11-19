import './LoginPage.scss';

export const LoginPage = () => {
    return (
        <form className='login-form'>
            <label htmlFor='email-field'>email</label>
            <input id='email-field' type='email' />

            <label htmlFor='psw-field'>password</label>
            <input id='psw-field' type='password' />

            <div>
                <button type='submit'>sign up</button>
                <button type='reset'>cansel</button>
            </div>

        </form>
    )
}
