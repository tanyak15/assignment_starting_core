import React from "react";
import { FaArrowRightLong, FaI, FaInstagram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pic9 from "../images/pic9.png";

const Sixth = () => {
  return (
    <div className="sixth">
      <div className="footer">
        <div className="footer-left">
          <div className="footer-left-text">
            Have a project in mind?Let us work together
          </div>
          <div className="footer-left-book">
            Book an intro Call
            <FaArrowRightLong />
          </div>
          <div className="footer-left-icons">
            <FaLinkedin />
            <FaTwitter />
            <IoLogoInstagram />
            <FaFacebook />
            <FaYoutube />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-right-navigation">
            <p className="same">Navigation</p>
            <p className="abc">About</p>
            <p className="abc">About us</p>
            <p className="abc">What We Do</p>
            <p className="abc">To The Power Of 10</p>
            <p className="abc">Donate</p>
            <p className="abc">Community</p>
          </div>
          <div className="footer-right-support">
            <p className="same">Support</p>
            <p className="abc">Help centre</p>
            <p className="abc">FAQ</p>
            <p className="abc">Contact</p>
            <p>Status</p>
          </div>
          <div className="footer-right-legal">
            <p className="same">Legal</p>
            <p className="abc">General info</p>
            <p className="abc">Privacy Policy</p>
            <p className="abc">Terms of Use</p>
          </div>
        </div>
      </div>
      <div className="">
        <img className="image9" src={pic9} alt="pic9" />
      </div>
      <div className="copyrights">
        ©️ 2024 Growumewdia. All rights reserved.
      </div>
    </div>
  );
};

export default Sixth;
