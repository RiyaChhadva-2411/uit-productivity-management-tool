import React from 'react';
import './Login.css';
import LoginSvgNew from "../svg/loginNew.png";
class Login extends React.Component{
    render(){
        return(
            <div className="container-fluid Login__container">
                <div className="row Login__svg-column">
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6">
                            <div className="Login__svg">
                                <img src={LoginSvgNew} alt="login-svg" className="Login__image" />
                            </div>
                    </div>

                    <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Login__column">
                        <div className="Login__heading">
                           Login
                        </div>
                        <form className="Login__Form">
                            <div className="form-row Login__dmrow">
                            <div className="col-lg-4 col-xs-12 col-sm-4">
                                <input type="text" className="form-control Login__form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="studentFirstName" id="studentFirstName" placeholder=" " required />
                                <span className="Login__span">Username</span>
                            </div>
                            </div>
                            <div className="form-row Login__dmrow">
                                <div className="col-lg-4 col-sm-4">
                                    <input type="password" className="studentPassword" id="studentPassword" className="form-control Login__form-control" placeholder=" " required  />
                                    <span className="Login__span">Enter Password</span>
                                </div>
                            </div>
                            <div className="row Login__row">
                            <div className="Login__form-submit">
                                {/* <button type="submit" className="btn Login__SaveButton">Save</button> */}
                                <button type="button" className="btn Login__SubmitButton">Login</button>
                            </div>
                            </div>
                        </form>
                    </div>

                    
                </div>
            </div>
        );
    }
}
export default Login;