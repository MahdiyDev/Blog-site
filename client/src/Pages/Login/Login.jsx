import useLogin from "../../Hooks/useLogin"

function Login() {
    const setUser = useLogin()

    const handleSubmit = e => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.input')

        const newUser = {
            user_email: inputs[0].value,
            user_password: inputs[1].value
        }
        
        setUser(newUser);
    }

    return (
        <>
            <form 
                onSubmit={handleSubmit}
            >
                <input type="email" className='input' />
                <input type="password" className='input' />
                <button type="submit">Login</button>
            </form>
        </>
    )
}

export default Login;
