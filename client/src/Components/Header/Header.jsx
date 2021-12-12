import { useState } from 'react';
import './Header.scss'
import PostModal from "../PostModal/PostModal.jsx";

function Header() {
    const [ modal, setModal ] = useState('')

    const modalOpen = () => {
        setModal(true)
    }
    return (
        <header className="header">
            <button className='modal-btn btn' onClick={modalOpen}>+</button>
            {modal ?
                <PostModal modal={modal} setModal={setModal} method='post' />
            : ''}
        </header>
    )
}

export default Header;
