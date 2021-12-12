import { Link } from 'react-router-dom'
import './Main.scss'
import { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import RenderUsers from '../RenderUser/RenderUser';
import useAuthUser from '../../Hooks/useAuthUser';

let num = 0
function Main({ children }) {
    const [ user, setUser ] = useState('')
    const userAuth = useAuthUser()
    const [ token ] = useAuth(true)

    const moreUser = () => {
        num = Math.floor(Math.random() * (user[1] / 5))
        fetchUser()
    }
    function fetchUser() {
        fetch(`http://localhost:4300/users?page=${num}&limit=5`, {
            headers: {
                'authorization': `${token}`
            }
        })
            .then(res => res.json())
        .then(data => {
            setUser(data) 
            typeof data.message !== 'undefined' ? console.log(data.message) :  console.log()
        })
        .catch(err => console.log(err))       
        
    }
    
    useEffect(fetchUser, [token])

    return (
        <main>
            <div className="main_warpper">
                <ul className='main-user-list'>
                    <li className='main-item'><Link className='item_link btn' to='/'>Home</Link></li>
                    <li className='main-item'><Link className='item_link btn' to={'/profile/' + userAuth.user_email} >Profile</Link></li>
                </ul>
            </div>
            {children}
            <div className="main_warpper">
                <RenderUsers user={user} moreUser={moreUser} />
            </div>
        </main>
    )
}

export default Main;
