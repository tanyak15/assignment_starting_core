import React from "react";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";

const Second = () => {
  return (
    <div className="second">
      <div className="result">Our Results</div>
      <div className="img1">
        <img src={pic1} alt="pic1" />
      </div>
      <div className="impact">Our Impact</div>
      <div className="img2">
        <img src={pic2} alt="pic1" class="fullscreen" />
      </div>
    </div>
  );
};

export default Second;
