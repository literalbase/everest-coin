import React from 'react'
import { Footer } from '../../Components'
import FeaturedCard from '../../Components/FeaturedCard/FeaturedCard'
import "./useritemdetail.css";
import Rose from "../../images/photo-1529626455594-4ff0802cfb2x-110x110.png";
import Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png";

function UserItemDetail() {
   
  


    return (
        <div className = "item-details">
            <div className ="item-details-1">
          <h2 className = "id-cname">Item Details</h2>
            </div>
            <div className = "everest-pic"> 
              <img src = {Monster} alt = ""/>
              <div className = "card-details">
                  <img src = {Rose} alt =""/>
                  <div className = "head-details">
                  <h2 style ={{color: "#f0b942"}}>Emily Rose</h2>
                  
                <h2>Item Owner</h2>
                <div className ="desc"> <h1>Description</h1></div>

                <p style ={{fontSize:"12px"}}>The monster had to fight since hehadno where to go or hide</p>
                
               
                 <button className = "btn-item" style = {{color:"teal"}}>Sell Now</button>
                </div>
               
                <span className = "pic-details">Highest Bid| 2ETH</span>
              
              </div>
            </div>
            <div className = "card">
               <FeaturedCard/>
       </div>
       <Footer/>
        </div>
    )
}

export default UserItemDetail
