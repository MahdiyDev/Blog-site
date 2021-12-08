import useLogin from "../../Hooks/useLogin"
import { Link } from 'react-router-dom'

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
            <div className="form_wrapper">
                <form 
                    className='form'
                    onSubmit={handleSubmit}
                >
                    <h2 className='form-title' >Login</h2>
                    <label htmlFor="Email">Email</label>
                    <input type="email" id='Email' className='input' />
                    <label htmlFor="Password">Password</label>                    
                    <input type="password" id='Password'  className='input' />
                    <button type="submit" className='form-btn'>Login</button>
                    <small>If you don't have account visit <Link to='/signup'> Sign Up </Link> page</small>
                </form>
            </div>
        </>
    )
}

export default Login;
