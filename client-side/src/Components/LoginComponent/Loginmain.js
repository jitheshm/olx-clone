import React from "react";
import { Link } from "react-router-dom";

function Loginmain({ setlogin }) {
    return <> <div className="login-page-content col-md-4 col-12">


        <div className="login-mainpage-closebtn p-2"><a href="" onClick={(e) => {
            e.preventDefault();
            setlogin((prevlogin) => !prevlogin)
        }}>
            <svg className="bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize: 28 }}>
                <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
            </svg></a></div>

        <div className="login-page-content-main">
            <div className="col-12 p-2 login-page-action">
                <Link to="phonesms" className="col-12"  >
                    <div className="login-page-smsloginbtn col-12 my-2 p-2">
                        <span><strong>Continue with phone</strong></span>
                    </div> </Link>
                    <Link className="col-12" >
                    <div className="login-page-smsloginbtn col-12 my-2 p-2">
                        <span><strong>Continue with Google</strong></span>
                    </div> </Link>
                    <span className="my-3"><strong>OR</strong></span>
                    <Link><strong><span style={{ textDecoration: 'underline' }}>Login with Email</span></strong></Link>
            </div>
        </div>

    </div></>
}

export default Loginmain;
