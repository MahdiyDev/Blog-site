import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function useUser(params) {
    const [ user, setUser ] = useState([])
    const [ token ] = useAuth(true)
    useEffect(() => {
        if (params) {
            fetch(`https://blog-site-team.herokuapp.com/user/${params}`, {
                headers: {
                    'authorization': `${token}`
                }
            })
            .then(res => res.json())
            .then(data => setUser(data))
            .catch(err => console.log(err))
        }
    }, [token, params])

    return user
}

export default useUser;
