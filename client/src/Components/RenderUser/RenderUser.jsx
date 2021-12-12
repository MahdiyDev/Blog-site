import { Link } from "react-router-dom";
import avatar from '../../Images/avatar.png'
import './RenderUser.scss'

function RenderUsers({ user, moreUser }) {
    
    return (
        <ul className='main-user-list reder-list'>            
            <h2 className='main-rec-title'>Recommend for you</h2>
            {user.length ? user[0].map(u => {
            let imgSrc = u.user_avatar ? 'http://localhost:4300/avatar/' + u.user_avatar : avatar
            let styleFile = {
                backgroundImage: `url(${imgSrc})`,
                backgroundSize: 'cover',
                backgroundRepeat: "no-repeat"
            }
            return (
            <li className="main-item reder-item" key={u.user_uid}>
                <Link className="item_link item_link-profile btn" to={'/profile/' + u.user_email}>
                    <div className='logo-img' style={styleFile} />
                    <h3 className='main-user-title'>{u.user_email}</h3>
                </Link>
            </li>
            )
            }) : ''}
            <button onClick={moreUser} className="profile-btn">more</button>
        </ul>
    )
}

export default RenderUsers;