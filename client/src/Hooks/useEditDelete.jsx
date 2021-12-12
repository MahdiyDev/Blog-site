import { useEffect, useState } from "react";

function useEditDelete() {
    const [ option, setOption ] = useState(null)
    useEffect(() => {
        if (option !== null) {
            fetch(`http://localhost:4300/posts`, {
                method: option.method,
                headers: {
                    "Content-Type": "application/json",
                    'authorization': `${option.token}`
                },
                body: JSON.stringify({
                    postId: option.id
                })
            })
            .then(res => res.json())
            .catch(e => console.log(e))           
        }
    }, [option])

    return setOption
}

export default useEditDelete;
