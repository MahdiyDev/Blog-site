import { useEffect, useState } from "react"
import useAuth from "../../Hooks/useAuth"
import avatar from '../../Images/avatar.png'

function ReanderPosts(setter) {
    const [ post, setPost ] = useState([])
    const [ token ] = useAuth(true)

    useEffect(() => {
        fetch(`http://localhost:4300/posts`, {
            headers: {
                'authorization': `${token}`
            }
        })
        .then(res => res.json())
        .then(data => setPost(data))
        .catch(err => console.log(err))
    }, [token])

    return (
        <ul className='post_list'>
            {post.length ?
            post.map(p => {
            let imgSrc = p.user_avatar ? 'http://localhost:4300/avatar/' + p.user_avatar : avatar
            let styleFile = {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
            }
            return (
            <li className='post_item' key={p.post_uid}>
                <h3 className='post_title'>{p.post_title}</h3>
                <img className='post_img' src={'http://localhost:4300/post/' + p.post_img} alt="img" />
                <div className="logo-img-post" style={styleFile} />
                <small className="post-date">{p.post_date}</small>
            </li>
            )
            })
            : []}
        </ul>
    )
}

export default ReanderPosts;
