import React from "react";
import pic4 from "../images/pic4.png";
import { FcBusinessman } from "react-icons/fc";

const Fourth = () => {
  return (
    <div>
      <div className="whyPage">Why We ?</div>
      <div className="container">
        <div className="left">
          <div>Save 60-70% on salaries.</div>
          <p>
            Hiring the best global talent unlocks cost savings of 70% on average
            when compared to US-based equivalents.
          </p>
          <div>Hire within days.</div>
          <p>
            We maintain a bench of pre-vetted talent ready to be trained and
            placed with Landed clients within 21 days.
          </p>
          <div>Expertly trained.</div>
          <p>
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>Expertly trained.</div>
          <p>
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
        </div>
        <div className="right">
          <img src={pic4} alt="pic4" />
        </div>
      </div>
      <div className="carousel">
        <div className="trainer">
          <p className="text">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>
            <div className="person">
              <div className="iconBusiness">
                <FcBusinessman style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="personName">
                <p className="pname">Jon Sherman</p>
                <p className="pdes">Founder at Practical Golf</p>
              </div>
            </div>
          </div>
        </div>
        <div className="trainer">
          <p className="text">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>
            <div className="person">
              <div className="iconBusiness">
                <FcBusinessman style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="personName">
                <p className="pname">Jon Sherman</p>
                <p className="pdes">Founder at Practical Golf</p>
              </div>
            </div>
          </div>
        </div>
        <div className="trainer">
          <p className="text">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>
            <div className="person">
              <div className="iconBusiness">
                <FcBusinessman style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="personName">
                <p className="pname">Jon Sherman</p>
                <p className="pdes">Founder at Practical Golf</p>
              </div>
            </div>
          </div>
        </div>
        <div className="trainer">
          <p className="text">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>
            <div className="person">
              <div className="iconBusiness">
                <FcBusinessman style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="personName">
                <p className="pname">Jon Sherman</p>
                <p className="pdes">Founder at Practical Golf</p>
              </div>
            </div>
          </div>
        </div>
        <div className="trainer">
          <p className="text">
            Every team member you hire is rigorously trained to deliver work of
            the highest quality while following your team's process.
          </p>
          <div>
            <div className="person">
              <div className="iconBusiness">
                <FcBusinessman style={{ width: "40px", height: "40px" }} />
              </div>
              <div className="personName">
                <p className="pname">Jon Sherman</p>
                <p className="pdes">Founder at Practical Golf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
