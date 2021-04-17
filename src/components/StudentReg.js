import React from 'react';
import "./StudentReg.css";
import studentRegister from "../svg/mainpage3.png";
class StudentRegistration extends React.Component{
    render(){
        return(
        <div>
            <div className="container-fluid Student__container">
                <div className="row Student__row">
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Student__svg-column1">
                        <div className="Student__Hello-heading">Hello Student</div>
                        <div className="Student__svg">
                            <img src={studentRegister} alt="studentRegister" className="Student__image" />
                        </div>
                    </div>

                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 Student__svg-column2">
                        <div className="Student__heading">
                                Student Registration Form
                        </div>
                        <div className="Student__Subject-heading">Fill The Subjects</div>
                        <form className="StudentReg__Form">
                           <div className="form-row Student__Form">
                                   <div className="Student__property">Subject 1:</div>
                                   <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>
                          <div className="form-row Student__Form">
                              <div className="Student__property">Subject 2:</div>
                              <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Form">
                              <div className="Student__property">Subject 3:</div>
                              <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Form">
                              <div className="Student__property">Subject 4:</div>
                              <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Form">
                              <div className="Student__property">Subject 5:</div>
                              <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Form">
                              <div className="Student__property">Subject 6:</div>
                              <input type="text" className="form-control Student__Subject" title="*ENTER CHARACTER VALUES ONLY" pattern="[A-Za-z]" placeholder=" " required />
                          </div>

                          <div className="Student__Subject-heading">
                              How much time do you wish to allot the above subjects?
                          </div>
                          <div className="Student__Time-allocation">
                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 1:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 2:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 3:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 4:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 5:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>

                          <div className="form-row Student__Time">
                                   <div className="Student__property">Time alloted to subject 6:</div>
                                   <input type="tel" className="form-control Student__Subject-time" title="*ENTER INTEGER VALUES ONLY" pattern="[0-9]" placeholder=" " required />
                          </div>
                          </div>


                        <div className="row Student__Submit-row">
                        <button type="submit" className="btn Student__Submit-Button">Submit</button>
                        </div>
                        </form>

                        
                    </div>

                </div>
            </div>
        </div>
        );
    }
}

export default StudentRegistration;