import React from 'react';
import "./Profile.css";
import Rose from "../../images/photo-1529626455594-4ff0802cfb2x-110x110.png";
import { Footer } from '../../Components';
import Mountain from "../../images/n-6ba043f112858727691bc7ca956f-295x267.png";
import Dawn from "../../images/magical-sulyman-232x223.png"
import  Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png"
import Deadpool from "../../images/deadpool-ryan-reynolds-dig-295x267.png"



function Profile() {
    const Profile = [
    
          
          {   img:Deadpool,     
              text:"Deadpool",
              desc:"price",
              id:2,
              bid:"34+"
              ,
              name:"John Doe"
          
          }
          
        
        
  ]
    const Social = ()=>(
        <>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        </>
    )
    return (
        <div className = "profile">
              <div>
           <h2 className = "connect">Profile </h2>
    </div>
    <div className = "div-box">
    <div className = "profile-card">
        <img src = {Rose} alt=""/>
        <h3>Smith Ora</h3>
        <p>smithora.com</p>
        <div className = "social">
        <Social />

        <button>follow</button>
        </div>
    </div>
    <div className = "inner">
    <div className = "header">
    <h2>All</h2>
    <h2>Collection</h2>
    <h2>Nfts</h2>
        </div>
       
        <div className = "market-card">
        {Profile.map((d,id) =>(
        <div className = "marketcard-inner">
            <img key = {id} src = {d.img} alt =""/>
            <div className = "bid"><b>{d.bid}</b><p>bid for these product</p></div>
            <div className= "card-rated" key = {id}>{d.text} <span>50<i className="far fa-heart"></i></span></div>
            <div className = "card-price" key = {id}> {d.desc} <span>1.5ETH</span></div>
           <div className = "own"> <h2> Own by</h2> <span> {d.name} </span></div>
           <hr/>
            <button className = "button" style = {{backgroundColor:"green"}}>SELL NOW</button>
            
            </div>
        ))}

        </div>
        </div>
        
        </div>
        <div className = "footer">
        <Footer/>
        </div>
        </div>
    )
}

export default Profile
