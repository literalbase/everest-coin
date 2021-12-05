import React from 'react';
import Footer from '../../Components/Footer/Footer';
import "./Login.css"
import { Link } from 'react-router-dom';

function Login() {
    const Font = ()=>(
        <>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        </>
    )
    return (
        <div className = "login">
             <div className ="login_page">
          <h2 className = "connect">Log In </h2>
            </div>
            <div className = "login-bg-div" >
                 <h2>Log In to YOur Account</h2>

                 <div className = "login-details">
            <input type= "text" placeholder = "Enter Your Email"/> 
            
            <input type= "password" placeholder = "password"/> 
            <div className = "checkbox">
       <input type= "checkbox" /> <span>Remember Me</span>
       </div>
            <button>Submit</button>
            <hr/>
            <h3>Or</h3>
            <div className = "font">
           <Font/>
            </div>
            <div><p style={{color:"white"}}>Don't have an account yet? </p> <Link to = '/SignUp'><span>SignUp</span></Link></div>
                 </div>
            </div>
            <div className = "footer">
            <Footer/>
            </div>
        </div>
    )
}

export default Login
