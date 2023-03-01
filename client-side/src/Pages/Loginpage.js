import React from "react";

import Login from "../Components/LoginComponent/Login";


function Loginpage(props) {
    return <>
        <Login>
            {props.children}
        </Login>
    </>
}

export default Loginpage;
