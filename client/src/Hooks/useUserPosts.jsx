import { useEffect, useState } from "react";
import useAuth from "./useAuth";

function useUserPost(params) {
    const [ userPost, setUser ] = useState([])
    const [ token ] = useAuth(true)
    useEffect(() => {
        if (params) {
            fetch(`http://localhost:4300/postuser/${params}`, {
                headers: {
                    'authorization': `${token}`
                }
            })
            .then(res => res.json())
            .then(data => setUser(data))           
        }
    }, [token, params])

    return userPost
}

export default useUserPost;
