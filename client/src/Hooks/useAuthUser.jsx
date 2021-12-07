import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function useAuthUser() {
    const [ authUser, setAuthUser ] = useState('')
    const [ token ] = useAuth(true)

    useEffect(() => {
        fetch('http://localhost:4300/auth', {
            headers: {
                'authorization': `${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setAuthUser(data) 
            typeof data.message !== 'undefined' ? console.log(data.message) :  console.log()
        })
        .catch(err => console.log(err))
    }, [token])

    return authUser
}

export default useAuthUser;