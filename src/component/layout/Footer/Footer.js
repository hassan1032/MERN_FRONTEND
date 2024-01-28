import React from "react";
import lo from "../../../images/logo2.png";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="mainP">
       
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: "#ECEFF1" }}
        >
          
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: "black" }}
          >
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>

            <div className="me-3">
              <a href="https://www.linkedin.com/in/hassan-khan-2b0022229/" className="text-white me-2">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/color/48/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a href="https://github.com/hassan1032" className="text-white me-2">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/color/48/github--v1.png"
                  alt="github--v1"
                />
              </a>
              <a href="https://www.instagram.com/_iam__pathan_?igsh=MWxwZzU1dmg0ZjV5cQ==" className="text-white me-2">
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/color/48/instagram-new--v1.png"
                  alt="instagram-new--v1"
                />
              </a>
            </div>
           
          </section>
          
          <section className="">
            <div className="container text-center text-md-start mt-5">
             
              <div className="row mt-3">
               
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  
                  <h6 className="text-uppercase fw-bold">Company name</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <img src={lo} className="logo2" alt="Logo" />
                  </p>
                </div>
               
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">SERVICE</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
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

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
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

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* Links */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    // style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                  />
                  <p>
                    <i className="fas fa-home mr-3" /> Lucknow Tedipuliya S-70 Adil Nagar
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3" /> khanhassan1032@gmail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3" /> +91 8318089234
                  </p>
                  <p>
                    <i className="fas fa-print mr-3" /> + 01 234 567 89
                    <h6>CreatedBy: Hassan khan</h6>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2024 Copyright:
            <a className="text-dark" href="https://mdbootstrap.com/">
              HKmart
            </a>
          </div>
          
        </footer>
      </div>
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
