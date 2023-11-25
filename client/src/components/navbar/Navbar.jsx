import React from 'react';
import './styles.css'

const Navbar = () => {
    return (
        <>
            <header className='header-menu'>
                <div className='header-logo'>
                    <h2>Visitor Manager</h2>
                </div>

                <div className='menu-items'>
                    <ul>
                        <li className='menu-item'>About</li>
                        <li className='menu-item'>Contact</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Navbar