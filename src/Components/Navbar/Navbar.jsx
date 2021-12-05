import React,{useState} from 'react';
import "./navbar.css";
import  Everest from "../../images/Everest Coin3.png"
import { RiCloseLine,RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-router-dom';




function Navbar() {

    const Menu = ()=>(
        <>
        <ul>
        <Link  to ="/Marketplace"> <li> MarketPlace </li></Link>
       
        
        <Link  to ="/Login"> <li> Sign In </li></Link>
        <Link  to ="/Collection"><li>Collection  </li></Link>
        <Link  to ="/ItemDetails"><li> Discover  </li></Link>
       
    </ul>
    </>
    )
    const [toggleMenu , setToggleMenu] = useState(false)
    return (
        <div className = "everest_navbar">
        <div className  = "everest_navbar-logo">
        
       <img src = {Everest} alt = "everest logo"/>
       
        </div>

         <div className = "everest_navbar-item">
            <Menu/>
         </div>
         <div className = "everest_navbar-item-token">
         <Link to = "/ConnectWallet" className="everest_navbar-item-token">
        <button>Connect wallet</button>
        </Link>
           </div>
           <div className = "everest-nav-menu">
           {toggleMenu 
           ?
           <RiCloseLine color = "#fff" size = {27} onClick ={()=>setToggleMenu(false)}/>
           :  <RiMenu3Line color = "#fff" size = {27} onClick ={()=>setToggleMenu(true)}/>
           }

           {
               toggleMenu &&(
                 <div className = "everest-mobile-view">
                 <Menu/>
                 </div>
               )
           }
           </div>
        </div>
    )
}

export default Navbar
