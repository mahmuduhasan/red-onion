import React from 'react';
import photo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-copyright text-center text-white bg-dark py-3">
            <div  className="footer">
                <div className="footerLink">
                    <a href="https://reactjs.org/">About Online Food</a><br/>
                    <a href="https://reactjs.org/">Read Our Blog</a><br/>
                    <a href="https://reactjs.org/">Signup To Deliver</a><br/>
                    <a href="https://reactjs.org/">Add Your Restaurant</a>
                </div>
                <div className="footerImage">
                    <img src={photo} alt=""/>
                </div>
                <div className="footerLink">
                    <a href="https://reactjs.org/">Get Help</a><br/>
                    <a href="https://reactjs.org/">Read FAQs</a><br/>
                    <a href="https://reactjs.org/">View all cities</a><br/>
                    <a href="https://reactjs.org/">Restaurants near me</a>
                </div>
            </div>
            <div className="webLink">© 2020 Copyright:
                <a href="https://facebook.com/a.s.hasan2"> Redonion.com</a>
            </div>
        </div>
    );
};

export default Footer;