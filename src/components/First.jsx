import React from "react";
import { SiBitcoinsv } from "react-icons/si";
import { FaArrowRightLong } from "react-icons/fa6";

const First = () => {
  return (
    <div className="first">
      <div className="navbar">
        <div className="logo">
          <SiBitcoinsv style={{ color: "mustard" }} /> GrowUMedia
        </div>
        <div className="items">
          <div>Video Editing</div>
          <div>Reels/Ticktock</div>
          <span>Video Promotion</span>
          <span>Pricing</span>
          <span>Career</span>
        </div>
        <div className="intro">
          Book An Intro <FaArrowRightLong />
        </div>
      </div>
      <p className="text1">Not Just Another</p>
      <p className="text2">Video Editing Agency</p>
      <p className="text3">
        We Help You To Start A New Or Grow Your Existing Podcast That Unlocks
        Opportunities & Leads, Expands Impact And Increases Revenue.
      </p>
      <div className="fLast">
        <div className="box1">View Plans & Pricing</div>
        <div className="box2">
          Our Project <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default First;
