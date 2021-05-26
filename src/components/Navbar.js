import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from './Button';

function Navbar() {
    const [click, steClick]= useState(false);
    const [button, steButon]= useState(true);

    const handleClick = () => steClick (!click);
    const closeMobileMenu = () => steClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            steButon (false);
        } else {
            steButon (true);
        }
    };

    window.addEventListener('resize',showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        4D-Logiciels < i className='fab fa-typo3'/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={ click ? 'nav-menu-active' : 'nav-menu'}>
                        <li className= 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className= 'nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Applications
                        </Link>
                        </li>
                        <li className= 'nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Login Please</Button>}

                </div>
            </nav>
        </>
    )
}

export default Navbar
