import React, { useContext, createContext, useState }from 'react';
 import "./Home.css";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Navbar from "./Navbar.js";
import Hero from "./Hero.js";
import Features from "./Features.js";
import StudentRegistration from "./StudentReg.js";
import {BrowserRouter, Route,Switch} from "react-router-dom";

class Home extends React.Component{
    render(){
        return(
             <BrowserRouter>
             <div>
                 <div className="container-fluid Home__container">
                     <Navbar />
                 </div>
                 <Switch>
                     <Route exact path="/" component={Hero} />
                     <Route exact path="/features" component={Features} />
                     <Route exact path="/student-registration" component={StudentRegistration} />
                     <Route exact path="/signup" component={Signup} />
                     <Route exact path="/login" component={Login} />

                 </Switch>
            </div>
             </BrowserRouter>

            );
    }
}
 export default Home;