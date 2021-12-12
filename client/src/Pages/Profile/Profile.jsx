import useAuthUser from "../../Hooks/useAuthUser";
import './Profile.scss'
// Images
import avatar from '../../Images/avatar.png'
import { Bin, Camera } from "../../Images/images";

import Header from '../../Components/Header/Header'
import Main from "../../Components/Main/Main";
import useUser from "../../Hooks/useUser";
import { useParams } from 'react-router-dom'
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useUserPost from "../../Hooks/useUserPosts";
import useEditDelete from "../../Hooks/useEditDelete";

function Profile() {
    // Token
    const [ setToken ] = useAuth(false)
    const [ token ] = useAuth(true)
    // Class List Add
    const [ logOutBtn, setLogOutBtn ] = useState('log-out-btn')
    const [ cameraBtn, setCameraBtn ] = useState('camera')
    const [ deleteBtnClick, setdeleteBtnClick ] = useState('deleteBtn')

    const [ accessUser, setAccessUser ] = useState({})
    const authUser = useAuthUser()
    const { email } = useParams()
    const user = useUser(email)
    const [ modal, setModal ] = useState(false)
    const [ img, setImg ] = useState('')
    const userPost = useUserPost(user.length ? user[0].user_uid : '')
    useEffect(() => {
        if (user.length && authUser) {
            const User = user.find(u => u.user_email === authUser.user_email)
            setAccessUser(User)
        }
        if (typeof accessUser === 'undefined') {
            setLogOutBtn('log-out-btn--active')
            setCameraBtn('camera--active')
            setdeleteBtnClick('deleteBtn--active')
        } else {
            setLogOutBtn('log-out-btn')
            setCameraBtn('camera')
            setdeleteBtnClick('deleteBtn')
        }
    }, [authUser, user, accessUser])
    const logOut = () => {
        if (typeof accessUser !== 'undefined') {
            setToken(false)
        }
    }

    
    const cameraClick = () => {
        setModal(true)
    }
    
    const inputChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result);
        } 
    }
    const setOption = useEditDelete()
    const [ editModal, setEditModal ] = useState(false)
    const [ id, setId ] = useState('')

    const deleteBtn = e => {
        setOption({
            method: "delete",
            id: e.target.id,
            token: token
        })
        window.location = window.location.href
    }

    const editBtn = e => {
        setEditModal(true)
        setId(e.target.id)
    }

    let imgSrc = user.length ? (user[0].user_avatar ? 
        'http://localhost:4300/avatar/' + user[0].user_avatar 
    : avatar) :avatar

    let styleFile = {
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"
    }

    return (
        <>
        <Header />
            <Main>
                <div className="profile_wrapper">
                    <div className="profile_background" />
                    <div className="profile">
                        <div className='avatar' style={styleFile} >
                            <button className={`${cameraBtn} btn`} onClick={cameraClick}>
                                <Camera />
                            </button>
                        </div>                        
                        <div className="profile-name_wrapper">
                            <small className="profile-name-content" >First Name:</small><h3 className='profile_name'> {user.length ? user[0].user_fname : ''}</h3>
                            <small className="profile-name-content" >Last Name:</small><h3 className='profile_name'> {user.length ? user[0].user_lname : ''}</h3>
                            <small className="profile-name-content" >Email:</small><h3 className='profile_name'> {user.length ? user[0].user_email : ''}</h3>
                            <small className="profile-name-content" >Join Date: {user.length ? user[0].user_date.split('.')[0] : ''}</small>
                            <button onClick={logOut} className={`${logOutBtn} btn`} >Log Out</button>
                        </div>
                        {modal ? 
                            <div className="upload-form-wrapper" onClick={e => e.target.classList.value === 'upload-form-wrapper' ? setModal(false) : ''}>
                                <form
                                    action="http://localhost:4300/avatar"
                                    method="post"
                                    encType="multipart/form-data"
                                    className="upload-form"
                                >
                                    <div className="img_wrapper">
                                        <img className="form-sub-img" src={img} alt="" />
                                    </div>
                                    <div className="input_wrapper">
                                        <input type="hidden" name="authorization" value={token} />
                                        <input type="file" className="file" name="image" onChange={inputChange} />
                                        <button type="submit" className="form-sub-btn">submit</button>
                                    </div>
                                </form>
                            </div>
                        : ''}
                        
                    </div>
                    <ul className='post_list'>
                        {userPost.length ?
                        userPost.map(p => {
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
                            <button className={deleteBtnClick + ' btn'} id={p.post_uid} onClick={deleteBtn}>
                                <Bin />
                            </button>
                            <button className={deleteBtnClick + ' btn edit-btn'} id={p.post_uid} onClick={editBtn}>
                                <Bin />
                            </button>
                            {editModal ? 
                                <div className="upload-form-wrapper" onClick={e=> e.target.classList.value ===
                                    'upload-form-wrapper' ?
                                    setEditModal(false) : ''}
                                    >
                                    <form action="http://localhost:4300/updatePost" method='POST'
                                        encType="multipart/form-data" className="upload-form">
                                        <div className="img_wrapper">
                                            <img className="form-sub-img" src={img} alt="" />
                                        </div>
                                        <div className="input_wrapper">
                                            <input type="hidden" name="authorization" value={token} />
                                            <input type="hidden" name="postId" value={id} />
                                            <input type="text" className='input' name='postTitle' />
                                            <input type="file" className="file" name="postImage"
                                                onChange={inputChange} />
                                            <button type="submit" className="form-sub-btn">submit</button>
                                        </div>
                                    </form>
                                </div>
                            : ''}
                        </li>
                        )
                        })
                        : []}
                    </ul>
                </div>
            </Main>
        </>
    )
}

export default Profile;