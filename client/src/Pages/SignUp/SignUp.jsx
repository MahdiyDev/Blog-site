import { Link } from "react-router-dom"
import useSignUp from "../../Hooks/useSignUp"
import './SignUp.scss'

function SignUp() {
    const setUser = useSignUp()
    const signSubmit = e => {
        e.preventDefault()
        const inputs = document.querySelectorAll('.input')

        const newUser = {
            user_fname: inputs[0].value,
            user_lname: inputs[1].value,
            user_email: inputs[2].value,
            user_password: inputs[3].value
        }

        setUser(newUser);
    }

    return (
        <>
            <div className="form_wrapper">
                <form
                    className='form'
                    onSubmit={signSubmit}
                    >
                    <h2 className='form-title' >Sign Up</h2>
                    <label htmlFor="FirstName"  className="form-label" >First Name</label>
                    <input type="text" className='input' id='FirstName' placeholder='First Name' />
                    <label htmlFor="LastName" className="form-label" >Last Name</label>
                    <input type="text" className='input' id='LastName' placeholder='Last Name' />
                    <label htmlFor="Email" className="form-label" >Email</label>
                    <input type="email" className='input' id='Email' placeholder='Email' />
                    <label htmlFor="Password" className="form-label" >Password</label>
                    <input type="password" className='input' id='Password' placeholder='Password' />
                    <button type="submit" className='form-btn btn'>Sign Up</button>
                    <small>If you have account visit <Link className="form-link" to='/login'> Login </Link> page</small>
                </form>
            </div>
        </>
    )
}

export default SignUp;
