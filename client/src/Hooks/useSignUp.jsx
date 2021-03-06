import { useEffect, useState } from "react";
import url from "../assets/url";
import useAuth from "./useAuth";

function useSignUp() {
    const [ user, setUser ] = useState('')
    const [ setToken ] = useAuth(false)

    useEffect(() => {
        if (user) {
            fetch(`${url}signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                setToken(data.accessToken) 
                typeof data.message !== 'undefined' ? console.log(data.message) :  console.log()
            })
            .catch(err => console.log(err))
        }
    }, [user, setToken])

    return setUser
}

export default useSignUp;