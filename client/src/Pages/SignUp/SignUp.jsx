import useSignUp from "../../Hooks/useSignUp"

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
            <form
                onSubmit={signSubmit}
            >
                <input type="text" className='input' />
                <input type="text" className='input' />
                <input type="email" className='input' />
                <input type="password" className='input' />
                <button type="submit">Sign Up</button>
            </form>
        </>
    )
}

export default SignUp;
