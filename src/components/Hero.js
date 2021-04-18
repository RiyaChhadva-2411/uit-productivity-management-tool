import React from 'react';
import './Hero.css';
import student from "../images/student.png";
import Features from "./Features.js";
import About from "./About.js";
import heroimage from "../svg/mainpage1.png";
class Hero extends React.Component{
    render(){
        return(
            <div className="container-fluid Hero__container">
            <div className="Hero__first-row">
                 <div className="row">
                     <div className="col-md-6">
                          <div className="Hero__heading">
                              <div>Bring Yourself To</div>
                             <div>The Top</div>
                           </div>
                           <div className="Hero__paragraph">
                               Stop looking for a secret trick and recognise that the best version of yourself should be your vision, 
                               not anybody else's !
                           </div>
                            <button type="button" className="Hero__button">Explore</button>
                      </div>
    
                      <div className="col-md-6">
                        <div className="Hero__second-col">
                            <img className="Hero__svg" src={heroimage} />
                        </div>
                      </div>
                     
                  </div>
                  </div>
                  <div id="about" className="Hero__about-page-scroll">
                      <About />
                  </div>

                  <div id="features" className="Hero__features-page-scroll">
                      <Features />
                  </div>
                </div>
        )
    }
}
export default Hero;