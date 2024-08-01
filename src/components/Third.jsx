import React from "react";
import pic3 from "../images/pic3.png";

const Third = () => {
  return (
    <div className="third">
      <div className="projects">Our Projects</div>
      <div className="proList">
        <div className="item1 clr">All Projects</div>
        <div className="item1">Motivation</div>
        <div className="item1">Corporate</div>
        <div className="item1">Motivation</div>
        <div className="item1">Corporate</div>
        <div className="item1">Corporate</div>
        <div className="item1">Motivation</div>
        <div className="item1">Corporate</div>
        <div className="item1">Motivation</div>
        <div className="item1">Corporate</div>
      </div>
      <div>
        <img className="image3" src={pic3} alt="pic3" />
      </div>
    </div>
  );
};

export default Third;
