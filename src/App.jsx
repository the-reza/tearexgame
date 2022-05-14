import React from "react";
import "./style.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function App() {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true
  };

  return (
    <Slider className="main" {...settings}>
      <div className="wrap main1">
        <p className="scroll1">scroll to left →</p>
        <h1 className="title1">
          <span className="title1-2">TEAREX </span>GAME
          <button className="btn1">Sign In</button>
        </h1>
      </div>
      <div className="wrap main2">
        <h1 className="title2">
          ARE YOU READY TO WIN MONEY?
        </h1>
      </div>
      <div className="wrap main4">
        <h1 className="title4">
          You will compete with 455 other people
        </h1>
      </div>
      <div className="wrap main3">
        <h1 className="title3">
          sign in now <span className="fun">:)</span>
          <br />
          <p className="more">
            Contact Us: <br />
            tearex05@yahoo.com
          </p>
        </h1>
      </div>
    </Slider>
  );
}


export default App;
