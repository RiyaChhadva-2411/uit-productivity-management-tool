import React from "react";
import money from "../svg/money.svg";
import moneypot from "../svg/moneypot.svg";
import screen from "../svg/screen.svg";
import hands from "../svg/hands.svg";

import Carousel from "react-spring-3d-carousel";
import { v4 as uuid } from "uuid";
import { config } from "react-spring";
import "./Features.css"
export default class Features extends React.Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuid(),
      content: 
      <div className="container"> 
        <div className="Features__cards">
          <div className="Features__circle">
            <span className="Features__num">1</span>
          </div>
          <div className="Features__rect">
            <div className="Features__rect_small">
              <div className="Features__col-1">
                <img className="Features__img" src={money} alt="1" />
              </div>
              <div className="Featres__col-2">
                <span className="Features__Text">To provide financial support to the members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
,
    },
    {
      key: uuid(),
      content: 
      <div className="container"> 
        <div className="Features__cards">
          <div className="Features__circle">
            <span className="Features__num">2</span>
          </div>
          <div className="Features__rect">
            <div className="Features__rect_small">
              <div className="Features__col-1">
                <img className="Features__img" src={moneypot} alt="2" />
              </div>
              <div className="Features__col-2">
                <span className="Features__Text">To provide the habit of thrift amongst the members</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    },
    {
      key: uuid(),
      content: 
      <div className="container"> 
      <div className="Features__cards">
        <div className="Features__circle">
          <span className="Features__num">3</span>
        </div>
        <div className="Features__rect">
          <div className="Features__rect_small">
            <div className="Features__col-1">
              <img className="Features__img" src={screen} alt="3" />
            </div>
            <div className="Features__col-2">
              <span className="Features__Text">To encourage financial planning amongst the members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
     },
    {
      key: uuid(),
      content: <div className="container"> 
      <div className="Features__cards">
        <div className="Features__circle">
          <span className="Features__num">4</span>
        </div>
        <div className="Features__rect">
          <div className="Features__rect_small">
            <div className="Features__col-1">
              <img className="Features__img" src={hands} alt="4" />
            </div>
            <div className="Features__col-2">
              <span className="Features__Text">To support the activites of NIMA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    },
    
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    console.log(this.state.config);
    return (
      <div>
      <div className="row Features__heading-row">
        <div className="Features__heading">
          FEATURES:
        </div> 
      </div>
      <div className="row Features__row">
      <div style={{width: "80%", height: "500px", margin: "0px auto"}}>
      <Carousel 
         slides={this.slides}
         goToSlide={this.state.goToSlide}
         offsetRadius={this.state.offsetRadius}
         showNavigation={this.state.showNavigation}
         animationConfig={this.state.config}

      />
      </div>
      </div>
      </div>
    );
  }
}
