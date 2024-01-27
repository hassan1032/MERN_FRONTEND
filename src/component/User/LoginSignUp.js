import React, { Fragment, useRef,useState } from "react";
import "./LoginSignupUp.css";
import Loader from "../layout/Loader/Loader";
import {Link} from "react-router-dom"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import LockOpenIcon from "@material-ui/icons/LockOpen"
const LoginSignUp = () => {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switcherTab = useRef(null);

const [loginEmail, setLoginEmail] = useState("")
const [loginPassword, setLoginPassword] = useState("")
   
  const loginSubmit = ()=>{
    console.log("Form is Submited")
  }

  const switcherTabs = (e, tab)=>{
    if(tab === "login"){
      switcherTab.current.classList.add("shiftToNeutral");
      switcherTab.current.classList.remove("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutralForm");
      switcherTab.current.classList.remove("shiftToLeft");
    }
    if (tab === "register"){
      switcherTab.current.classList.add("shiftToRight");
      switcherTab.current.classList.remove("shiftToNeutral");
      switcherTab.current.classList.add("shiftToNeutralForm");
      switcherTab.current.classList.add("shiftToLeft");
       

    }
  }


  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <div>
            <div className="login_signUp_toggle">
              <p onClick={(e) => switcherTabs(e, "login")}>LOGIN</p>
              <p onClick={(e) => switcherTabs(e, "register")}>REGISTER</p>
            </div>
            <button ref={switcherTab}></button>
          </div>
          <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
            <div className="loginEmail">
              <MailOutlineIcon />
              <input
                type="email"
                placeholder="Email"
                required
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </div>
            <div className="loginPassword">
                <LockOpenIcon/>
                <input
                type="password"
                placeholder="Password"
                required
                value={loginPassword}
                onChange={(e)=> setLoginPassword(e.target.value)}
                />

            </div>
            <Link to="/password/forgot"/>Forget Password
            <input type="submit" value="Login" className="loginBtn"/>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginSignUp;
