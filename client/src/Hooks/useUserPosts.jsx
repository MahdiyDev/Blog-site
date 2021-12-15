import { useEffect, useState } from "react";
import url from "../assets/url";
import useAuth from "./useAuth";

function useUserPost(params) {
    const [ userPost, setUser ] = useState([])
    const [ token ] = useAuth(true)
    useEffect(() => {
        if (params) {
            fetch(`${url}postuser/${params}`, {
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
