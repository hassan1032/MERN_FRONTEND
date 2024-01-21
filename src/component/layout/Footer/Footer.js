import React from "react";
import lo from "../../../images/logo2.png";
// import appStore from "../../../images";
import "./Footer.css";

const Footer = () => {
  return (
    <>
  {/* Remove the container if you want to extend the Footer to full width. */}
  <div className="">
    {/* Footer */}
    <footer
      className="text-center text-lg-start text-dark"
      style={{ backgroundColor: "#ECEFF1" }}
    >
      {/* Section: Social media */}
      <section
        className="d-flex justify-content-between p-4 text-white"
        style={{ backgroundColor: "black" }}
      >
        {/* Left */}
        <div className="me-5">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div className="me-3">
          <a href="" className="text-white me-2">
          <img width="30" height="30" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
          </a>
          <a href="" className="text-white me-2">
          <img width="30" height="30" src="https://img.icons8.com/color/48/github--v1.png" alt="github--v1"/>
          </a>
          <a href="" className="text-white me-2">
          <img width="30" height="30" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/>
          </a>
        </div>
        {/* Right */}
      </section>
      {/* Section: Social media */}
      {/* Section: Links  */}
      <section className="">
        <div className="container text-center text-md-start mt-5">
          {/* Grid row */}
          <div className="row mt-3">
            {/* Grid column */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              {/* Content */}
              <h6 className="text-uppercase fw-bold">Company name</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
              <img src={lo} className="logo2" alt="Logo"/>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">SERVICE</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-dark">
                Track Order
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                Return Order
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                Track Order
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Contact Us
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Useful links</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <a href="#!" className="text-dark">
                  Your Account
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Become an Affiliate
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Shipping Rates
                </a>
              </p>
              <p>
                <a href="#!" className="text-dark">
                  Help
                </a>
              </p>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              {/* Links */}
              <h6 className="text-uppercase fw-bold">Contact</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
              />
              <p>
                <i className="fas fa-home mr-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope mr-3" /> info@example.com
              </p>
              <p>
                <i className="fas fa-phone mr-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print mr-3" /> + 01 234 567 89
              </p>
            </div>
            {/* Grid column */}
          </div>
          {/* Grid row */}
        </div>
      </section>
      {/* Section: Links  */}
      {/* Copyright */}
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:
        <a className="text-dark" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  {/* End of .container */}
</>

  );
};

export default Footer;


// <footer>
// <div>
//   <div className="title">SERVICE</div>
//   <div className="service">
//     <a href="/#">Track Order</a>
//     <a href="/#">Return Order</a>
//     <a href="/#">Track Order</a>
//     <a href="/#">Contact Us</a>
//   </div>
// </div>
// <div>
//   <div className="title">COMPANY</div>
//   <div className="company">
//     <a href="/#">Track Order</a>
//     <a href="/#">Return Order</a>
//     <a href="/#">Track Order</a>
//     <a href="/#">Contact Us</a>
//   </div>
// </div>
// <div>
//   <div className="title">CONNECT WITH US</div>
//   <a href="https://www.instagram.com/_iam__pathan_?igsh=MWxwZzU1dmg0ZjV5cQ==" className="social">
//     <img
//       width="35"
//       height="35"
//       src="https://img.icons8.com/color/48/instagram-new--v1.png"
      
//       alt="instagram-new--v1"
//     />
//     Instagram
//   </a>
//   <a href="https://www.linkedin.com/in/hassan-khan-2b0022229/" className="social">
//     <img
//       width="35"
//       height="35"
//       src="https://img.icons8.com/color/48/linkedin.png"
//       alt="linkedin"
//     />
//     Linkedin
//   </a>
//   <a href="https://github.com/hassan1032" className="social">
//     <img
//       width="35"
//       height="35"
//       src="https://img.icons8.com/color/48/github--v1.png"
//       alt="github--v1"
//     />
//     Github
//   </a>
// </div>
// <div>
//   <img src={lo} className="logo2" alt="Logo"/>
//   <span>Created By:Hassan Khan</span>
// </div>
// </footer>