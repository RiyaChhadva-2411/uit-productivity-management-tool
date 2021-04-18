import React from "react";
import "./About.css"
import signupStep from "../images/signup-step.svg";
import loginStep from "../images/login-step.svg";
import studentFormStep from "../images/studentform-step.svg";
import DashboardStep from "../images/dashboard-step.svg";
export default class About extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid About__container">
                    <div className="About__heading">
                        About Our Tool
                    </div>
                    <div className="About__sub-heading">
                        <div className="About__question">
                        Welcome Student, confused on how to use our tool?
                        </div>
                        <p className="About__paragraph">Here are some simple steps you need to follow</p>
                    </div>
                    <div className="row About__row">
                      {/*First Row*/}
                      
                      <div className="About-column About__first">
                     
                         <div className="About__step-name">Step 1:</div>
                         <div className="About__step-description">The very first thing you need to do is, Signup to our platform and create your account.</div> 
                         </div>
                      <div className="About__svg1"><img src={signupStep} alt="signupstep" className="About__image" /></div>
                     
                     {/*Second Row*/}

                     <div className="About-column About__second">
                     
                     <div className="About__step-name">Step 2:</div>
                     <div className="About__step-description">After this, you will be having credentials. Login to your account.</div> 
                     </div>
                  <div className="About__svg2"><img src={loginStep} alt="loginstep" className="About__image" /></div>
                  
                    
                    {/*Third row*/}
                    <div className="About-column-second About__third">
                    <div className="About__step-name">Step 3:</div>
                     <div className="About__step-description-form">Once login is done, you have to fill the student registration form wherein you will be asked to input the subjects you have and how much time you are able to allocate for every particular subject.</div> 
                    </div>
                    <div className="About__svg3"><img src={studentFormStep} alt="loginstep" className="About__image" /></div>

                   {/*Fourth row*/}
                   <div className="About-column-second About__forth">
                       <div className="About__step-name">Step 4:</div>
                       <div className="About__step-description-form">After filling the student registration form, you will be redirected to the dashboard wherein you will be having your timetable prepared. You have the flexibility to edit your timetable</div>

                   </div>                    
                  <div className="About__svg4"><img src={DashboardStep} alt="dashboardstep" className="About__image" /></div>
                
                
                
                
                    </div>
                </div>

                    
                   
                
                
            </div>
        );
    }
}