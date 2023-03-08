import React from "react";
import './Header.css';
import logo from './OLX-Symbol.png'
function Header({setlogin}) {

  return (
    <div>
      <header className="header">

        <div className="navbar-head container-fluid">
          <img className="navbar-logo" src={logo} />
          <div className="col-7 col-md-8 col-xl-9 header-search">
            <div className="d-none d-sm-flex col-5 col-lg-4 header-location">
              <i className="fas fa-search col-1" />
              <input type="text" className="col-6 col-md-8 header-input" />
              <i className="icon ion-chevron-down" style={{ fontSize: 25 }} />
            </div>
            <div className="d-none d-sm-flex col-6 col-md-5 col-lg-7 item-search">
              <input type="text" className="col-8 col-lg-10 header-input" />
              <div className="header-search-icon">
                <i className="icon ion-android-search search-icon" />
              </div>
            </div>
          </div>
          <div className="header-lang">
            <span>
              <strong>ENGLISH</strong>
            </span>
            <i className="material-icons" style={{ fontSize: 40 }}>
              keyboard_arrow_down
            </i>
          </div>
          <div className="header-login">
            <a href="#" onClick={(e)=>{
              e.preventDefault();
              setlogin((prevlogin)=>!prevlogin)
            }}>
              <span>
                <strong>Login</strong>
              </span>
            </a>
          </div>
        </div>
      </header>
    </div>

  );
}

export default Header;
