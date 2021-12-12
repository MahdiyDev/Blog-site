import { useState } from "react";
import useAuth from "../../Hooks/useAuth";

function PostModal({ modal, setModal, method }) {
    const [ token ] = useAuth(true)
    const [ img, setImg ] = useState('')
    const inputChange = e => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        reader.onload = () => {
            setImg(reader.result);
        } 
    }
    return (
        <>
        {modal ?
        <div className="upload-form-wrapper" onClick={e=> e.target.classList.value === 'upload-form-wrapper' ?
            setModal(false) : ''}
            >
            <form action="http://localhost:4300/posts" method={method} encType="multipart/form-data"
                className="upload-form">
                <div className="img_wrapper">
                    <img className="form-sub-img" src={img} alt="" />
                </div>
                <div className="input_wrapper">
                    <input type="hidden" name="authorization" value={token} />
                    <input type="text" className='input' name='postTitle' />
                    <input type="file" className="file" name="postImage" onChange={inputChange} />
                    <button type="submit" className="form-sub-btn" >submit</button>
                </div>
            </form>
        </div>
        : ''}
        </>
    )
}

export default PostModal;
