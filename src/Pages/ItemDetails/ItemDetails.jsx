import React from 'react'
import "./itemdetails.css";
import Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png";
import Rose from "../../images/photo-1529626455594-4ff0802cfb2x-110x110.png";
import Man from "../../images/david-gandy-1200x8002x-118x122.png";
import FeaturedCard from "../../Components/FeaturedCard/FeaturedCard";
import Footer from "../../Components/Footer/Footer"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Name =[
  {
    img:Rose,
    name:"Bid placed by David Gandy",
    amount: "2ETH",
    time:"5hours ago"
  },
  {img:Man,
    name:" Bid placed by David Gandy",
    amount: "2ETH",
    time:"5hours ago"
  }
]
function ItemDetails() {
 

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
                  
                <h2 style ={{color: "#ffff"}}>Item Owner</h2>
                <div className ="desc" style ={{color: "#f0b942"}}> <h1 style ={{color: "#fff"}}>Description</h1></div>

                <p style ={{fontSize:"12px", color:"wheat"}}>The monster had to fight since hehadno where to go or hide</p>
                
               {
                 Name.map((d)=>(
               <div className = "img">
                 
                <img  className = "row-details"src = {d.img} alt =""/>
                <h2 style = {{fontSize:"12px", color:"wheat"}}>{d.name}<span >{d.amount}</span> <p  style = {{fontSize:"10px", color:"#fff"}}> {d.time}</p></h2>
                </div>
                 ))}
                 <Popup trigger = { <button className = "btn-item">Place Bid</button>}>
          {/*Please put a dynamic content here Read the documentation for more*/}
                 </Popup>
                </div>
               
                <span className = "pic-details">Highest Bid| 2ETH</span>
              
              </div>
            </div>
            <div className = "card">
               <FeaturedCard/>
       </div>
       <div style = {{backgroundColor:"#0C0E1A"}}>
       <Footer/>
       </div>
        </div>
    )
}

export default ItemDetails
