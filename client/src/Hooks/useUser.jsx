import { useEffect, useState } from "react";

function useUser() {
    const [ user, setUser ] = useState('')

    useEffect(() => {
        fetch('http://localhost:4300/users')
        .then(res => res.json())
        .then(data => {
            setUser(data) 
            typeof data.message !== 'undefined' ? console.log(data.message) :  console.log()
        })
        .catch(err => console.log(err))
    }, [])

    return user
}

export default useUser;