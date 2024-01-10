import React from "react";
import lo from "../../../images/logo2.png";
// import appStore from "../../../images";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <div className="title">SERVICE</div>
          <div className="service">
            <a href="/#">Track Order</a>
            <a href="/#">Return Order</a>
            <a href="/#">Track Order</a>
            <a href="/#">Contact Us</a>
          </div>
        </div>
        <div>
          <div className="title">COMPANY</div>
          <div className="company">
            <a href="/#">Track Order</a>
            <a href="/#">Return Order</a>
            <a href="/#">Track Order</a>
            <a href="/#">Contact Us</a>
          </div>
        </div>
        <div>
          <div className="title">CONNECT WITH US</div>
          <a href="https://www.instagram.com/_iam__pathan_?igsh=MWxwZzU1dmg0ZjV5cQ==" className="social">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/color/48/instagram-new--v1.png"
              
              alt="instagram-new--v1"
            />
            Instagram
          </a>
          <a href="https://www.linkedin.com/in/hassan-khan-2b0022229/" className="social">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
            />
            Linkedin
          </a>
          <a href="https://github.com/hassan1032" className="social">
            <img
              width="35"
              height="35"
              src="https://img.icons8.com/color/48/github--v1.png"
              alt="github--v1"
            />
            Github
          </a>
        </div>
        <div>
          <img src={lo} className="logo2" alt="Logo"/>
          <span>Created By:Hassan Khan</span>
        </div>
      </footer>
      <div className="copyright">
        <hr style={{ border: "0.1px solid #ffffffbd" }} />
        <p>&euro; copyright:2024 HK mart</p>
      </div>
    </>
  );
};

export default Footer;
