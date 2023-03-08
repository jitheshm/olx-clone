import React from "react";

function Loginsms({ setlogin }) {
    return <>
        <div className="login-page-content col-md-4 col-12">
            <div className="login-smspage-btn p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-arrow-left" style={{ fontSize: 28 }}>
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>
                <a onClick={(e) => {
                    e.preventDefault();
                    setlogin((prevlogin) => !prevlogin)
                }}>
                    <svg className="bi bi-x-lg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" style={{ fontSize: 28 }}>
                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" />
                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" />
                    </svg></a>
            </div>
            <div>
                <div>
                    <form className="mt-4">
                        <div className="loginform-header mb-3"><label className="form-label form-label"><h5><strong>Enter your phone number</strong></h5></label></div>
                        <div className="m-4"><input className="form-control" type="tel" placeholder="Phone Number" /></div>
                        <div className="m-4"><button className="btn btn-secondary submit-btn-size" type="submit">Next</button></div>
                    </form>
                </div>
            </div>
        </div>


    </>
}

export default Loginsms;
