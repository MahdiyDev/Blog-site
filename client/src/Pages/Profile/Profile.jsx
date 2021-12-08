import useAuthUser from "../../Hooks/useAuthUser";
import './Profile.scss'

function Profile() {
    const authUser = useAuthUser()

    const imgSrc = 'http://localhost:4300' + authUser.user_avatar
    
    return (
        <>
            <div className="profile_background">

            </div>
            <div className="profile">
                <img className='avatar' src={imgSrc} alt={authUser.user_avatar ? authUser.user_avatar.split('/')[2] : ''} />
                <h3 className='profile_name'>First Name: {authUser.user_fname}</h3>
                <h3>Last Name: {authUser.user_lname}</h3>
                <h3>Email: {authUser.user_email}</h3>
                <small>Join Date: {authUser.user_date ? authUser.user_date.split('.')[0] : ''}</small>
            </div>
        </>
    )
}

export default Profile;