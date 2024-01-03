import React, { useContext, useState } from 'react'
import olxLogo from '../../assets/OLX-Symbol.png'
import './Header.css'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { firebaseContext, userContext } from '../../store/Context'
import { getAuth, signOut } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { layoutContext } from '../../store/Context'
function Header() {

    const [signup, setSignup] = useState(false)
    const { user } = useContext(userContext)
    const { firebase } = useContext(firebaseContext)
    const { login, setLogin } = useContext(layoutContext)
    const navigate = useNavigate()
    console.log("header" + user);

    const handleLogout = async () => {
        try {
            const auth = getAuth(firebase);
            await signOut(auth)
            console.log("successfully logout");
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>

            <div className='navbar1'>


                <div className="container-fluid navbarHead">
                    <img src={olxLogo} />
                    <div className=" col-sm-7 col-md-8 col-xl-9 search">
                        <div className="d-none d-sm-flex col-5 col-lg-4 searchLocation ">
                            <i className="fas fa-search col-1" />
                            <input type="text" className="col-6 col-md-8 navInput" />
                            <i className="icon ion-chevron-down" style={{ fontSize: 25 }} />
                        </div>
                        <div className="d-none d-sm-flex col-6 col-md-5 col-lg-7 itemSearch">
                            <input type="text" className="col-8 col-lg-10 navInput" />
                            <div className='searchIcon' >
                                <i className="icon ion-android-search " />
                            </div>
                        </div>
                    </div>
                    <div className='language' >
                        <span>
                            <strong>ENGLISH</strong>
                        </span>
                        <i className="icon ion-chevron-down" style={{ fontSize: 23 }} />

                    </div>

                    {

                        user ? <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                {user.name}
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={handleLogout}>Logout</a>

                            </div>
                        </div>
                            : <a href="#" className='loginbtn' onClick={(e) => {
                                setLogin((prev) => !prev)
                            }}>
                                <span>
                                    <strong>Login</strong>
                                </span>
                            </a>
                    }
                    <Link className="sellMenu" to='/create'>
                        <SellButton></SellButton>
                        <div className="sellMenuContent">
                            <SellButtonPlus></SellButtonPlus>
                            <span>SELL</span>
                        </div>
                    </Link>

                </div>
            </div>

            {
                user ? null : login && <Login login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} />
            }
            {
                signup && <Signup login={login} setLogin={setLogin} signup={signup} setSignup={setSignup} />
            }
        </>
    )
}

export default Header