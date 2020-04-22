import React from 'react';
import logo from '../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Header.css'

const Header = () => {
    return (
            <div className="header">
                <nav className="d-flex justify-content-center">
                    <div className="logo">
                        <a href="#"><img src={logo} alt=""/></a>
                    </div>
                    <div className="navigation">
                        <a className="text-decoration-none" href="#"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></a>
                        <a className="text-decoration-none" href="#">Login</a>
                        <a className="signup text-white btn-danger text-decoration-none" href="#">Signup</a>
                    </div>
                </nav>
            </div>
    );
};

export default Header;