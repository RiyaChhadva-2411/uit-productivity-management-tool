import React from 'react';
import "./Home.css";
import login from "../images/login.png";
import signup from "../images/signup.png";
import "./Navbar.css";


export default class Navbar extends React.Component{
    render(){
        return(
        <div>
        <nav className="navbar navbar-expand-lg navbar-light Navbar__navbar">
        <a className="navbar-brand Navbar__logo" href="/">TheTop</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggle-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav Navbar__list">
                <li className="nav-item active Navbar__item">
                    <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item Navbar__item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item Navbar__item">
                    <a className="nav-link page-scroll" href="#features">Features</a>
          </li>
                <li className="nav-item Navbar__item">
                    <a className="nav-link" href="#">Team</a>
                </li>
                <li className="nav-item Navbar__item-student-register">
                    <a className="nav-link" href="/student-registration"><img src={signup} alt="register" className="Navbar__nav-svg" />Student Registration</a>
                </li>
                
                <li className="nav-item Navbar__item-signup">
                    <a className="nav-link" href="/signup"><img src={signup} alt="sign" className="Navbar__nav-svg" />Sign up</a>
                </li>
                <li className="nav-item Navbar__item-login">
                    <a className="nav-link" href="/login"><img src={login} alt="login" className="Navbar__nav-svg" /> Login</a>
                </li>
                
            </ul>
        </div>
    </nav>
    </div>
    )}
    
}