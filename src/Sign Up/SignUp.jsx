import React from 'react'
import Footer from '../Components/Footer/Footer'
import "./signup.css"

function SignUp() {
    
    const Font = ()=>(
        <>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        </>
    )
    return (
        <div className = "signup">
        <div className ="sign-up">
     <h2 className = "connect">Sign Up </h2>
       </div>
       <div className = "big-div">
            <h2>Create An Account</h2>

            <div className = "signup-details">
       <input type= "text" placeholder = "Enter Your Name"/> 
       <input type= "text" placeholder = "Enter Your Email"/> 
       <input type= "password" placeholder = "password"/> 
       <input type= "text" placeholder = "Account Type"/> 
       <div className = "checkbox">
       <input type= "checkbox" /> <span>I agree to policy</span>
       </div>
       <button>Submit</button>
       <hr/>
            <h3>Or</h3>
            <div className ="font">
           <Font/>
            </div>
            
                 
            </div>
            <div className="footer-signup">
            <Footer/>
            </div>
       </div>
       
        </div>
            
            
  
    )
}

export default SignUp
