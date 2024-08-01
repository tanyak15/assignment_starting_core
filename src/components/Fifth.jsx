import React from "react";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";
import pic8 from "../images/pic8.png";
import { GoPlus } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

const Fifth = () => {
  return (
    <div>
      <div className="working">How it works ?</div>
      <div>
        <img className="imageWorks" src={pic5} alt="pic5" />
      </div>
      <div className="working">How it works ?</div>
      <div>
        <img className="premium" src={pic6} alt="pic6" />
        <img className="premium" src={pic7} alt="pic7" />
      </div>
      <div className="working">Faq's</div>
      <div className="faqItems">
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="faqItemList">
          <p>What sort of podcasts do you work with?</p>
          <GoPlus />
        </div>
        <div className="ques">
          <p>See More Qusetions</p>
          <FaArrowRightLong />
        </div>
      </div>
      <div className="lastPricing">
        <p className="lastPricingQues">Have a question about pricing?</p>
        <div className="lastPricingBook">
          <div className="book">Book a Call</div>
          <div className="email">Email Us</div>
        </div>
      </div>
      <div>
        <img className="image8" src={pic8} alt="pic8" />
      </div>
    </div>
  );
};

export default Fifth;
