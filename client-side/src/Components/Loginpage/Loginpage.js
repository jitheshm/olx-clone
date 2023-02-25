import React from "react";
import './Loginpage.css'
function Loginpage({ setlogin }) {
    return <div className="login-page py-3">
        {/* Start: login-page-main */}
        <div className="login-page-content col-md-4 col-12">


            <div className="login-page-closebtn p-2"><a href="" onClick={(e) => {
                e.preventDefault();
                setlogin((prevlogin) => !prevlogin)
            }}>
                <svg className="bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize: 28 }}>
                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                </svg></a></div>

            <div className="login-page-content-main">
                <div className="col-12 p-2 login-page-action">
                    <a className="col-12" href="#">
                        <div className="login-page-smsloginbtn col-12 my-2 p-2">
                            <span><strong>Continue with phone</strong></span>
                        </div> </a><a className="col-12" href="#">
                        <div className="login-page-smsloginbtn col-12 my-2 p-2">
                            <span><strong>Continue with Google</strong></span>
                        </div> </a><span className="my-3"><strong>OR</strong></span><a href="#"><strong><span style={{ textDecoration: 'underline' }}>Login with Email</span></strong></a>
                </div>
            </div>

        </div>
        {/* End: login-page-main */}
    </div>


}

export default Loginpage;
