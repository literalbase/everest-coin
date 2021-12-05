import React from 'react'
import "./adpage.css"
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

function Adpage() {
    return (
        <div className = "everest-adpage">
            <h2> Create. Loan. Collect.<br/> Buy&Sell Your Nfts</h2>
            <Typed
            className = "typed"
                strings ={[ "Welcome to the world of Everest possibilities"]}
                typeSpeed={20}
                backSpeed={10}
                loop
            />
           
            <div className = "adpage-btn">
            <Link to ="./Create" className = "adpage-btn"><button style={{background:"",width:"180px"}}>Start to Create</button></Link>
            <button style={{width:"100px"}}>Learn how</button>
            </div>
        </div>
    )
}

export default Adpage
