import React from 'react';
import './Signup.css';

import signupSvg from "../svg/signup-svg.svg";
class Signup extends React.Component{
    render(){
        return(
            <div className="container-fluid Signup__container">
                <div className="row Signup__row">
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Signup__svg-column">
                            <div className="Signup__svg">
                                <img src={signupSvg} alt="signup-svg" className="Signup__image" />
                            </div>
                    </div>

                   
                    <div className="col-md-6 col-xs-12 col-sm-12 col-lg-6 Signup__column">
                        <div className="Signup__heading">
                           Signup
                        </div>
                        <form method="post" action="https://vishwapmt.herokuapp.com/signup" className="Signup__Form">
                            <div className="form-row Signup__dmrow">
                            <div className="col-lg-4 col-xs-12 col-sm-4">
                                <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="first_name" id="first_name" placeholder=" " required />
                                <span>First Name</span>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                    <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="middle_name" id="middle_name" placeholder=" " required />
                                    <span>Middle Name</span>
                            </div>
                            <div className="col-lg-4 col-sm-4">
                                    <input type="text" className="form-control" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]{1,32}" name="last_name" id="last_name" placeholder=" " required />
                                    <span>Last Name</span>
                                </div>
                            </div>

                             

                            <div className="form-row Signup__dmrow">
                                <div className="col-lg-4 col-sm-4">
                                    <input type="tel" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" name="Phone_Number" id="Phone_Number" className="form-control" placeholder=" " required />
                                    <span>Mobile Number</span>
                                </div>
                                {/* <div className="col-lg-4 col-sm-4">
                                    <input type="tel" className="form-control" name="studentAlternateContactNo" id="studentAlternateContactNo" title="*NUMBER SHOULD BE OF 10 DIGITS ONLY" pattern="[1-9]{1}[0-9]{9}" placeholder=" " required />
                                    <span>Alternate Mobile Number</span>
                                </div> */}
                                <div className="col-lg-4 col-sm-4">
                                    <input type="email" name="email" id="email" className="form-control" pattern="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$" placeholder=" " required  />
                                    <span>Email Address</span>
                                </div>
                            </div>


                            <div className="form-row Signup__dmrow">
                                <div className="col-lg-4 col-sm-4">
                                    <input type="password"  id="password" name="password" title="*PASSWORD SHOULD CONTAIN MINIMUM EIGHT CHARACTERS, ATLEAST ONE LETTER, ONE NUMBER AND ONE SPECIAL CHARACTER" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" className="form-control" placeholder=" " required  />
                                    <span>Enter Password</span>
                                </div>
                                <div className="col-lg-4 col-sm-4">
                                    <input type="password" name="password" id="password" title="*PASSWORD SHOULD CONTAIN MINIMUM EIGHT CHARACTERS, ATLEAST ONE LETTER, ONE NUMBER AND ONE SPECIAL CHARACTER" pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$" className="form-control" placeholder=" " required  />
                                    <span>Confirm Password</span>
                                </div>
                            </div>
                           
                            <div className="Signup__form-submit">
                                <button type="submit" className="btn Signup__SaveButton">Save</button>
                                <button type="button" className="btn Signup__SubmitButton">Signup</button>
                            </div>
                            
                        </form>
                    </div>

                    
                </div>
            </div>
        );
    }
}
export default Signup;