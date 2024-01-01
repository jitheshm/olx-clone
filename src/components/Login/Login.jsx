import React from 'react'
import logo from '../../assets/OLX-Symbol.png'
import './Login.css'
function Login() {
    return (
        <div className='loginContainer'>
            <div className='col-4 login pt-4 m-auto'> 
                <div>
                    <img src={logo} alt=""  />
                </div>
                <div className='mt-5'>
                    <form action="" method="post">
                        <h5>Enter the Email</h5>
                        <input type="text" style={{height:'40px'}} /> 
                        <h5 className='mt-3'>Enter the Password</h5>
                        <input type="text" style={{height:'40px'}}/> 
                        <button type='submit' className='col-11 mt-4 btn ' style={{height:'50px', backgroundColor:'#002F34',color:'#ffffff'}}>submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login