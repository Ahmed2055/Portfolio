import React from 'react'
import './Header.css'
import ahmed from '../pics/ahmed.png'

function Header() {
    return (
        <div className='header'>
            <img src={ahmed} alt='logo' className='header__logo' />
        </div>
    )
}

export default Header
