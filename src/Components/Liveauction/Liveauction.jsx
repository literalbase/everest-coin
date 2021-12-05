import React, { useEffect, useState } from 'react';
import "./liveauction.css"
import Wick from "../../images/n-9760ba798f5cf8194ef31857817d-295x267.png"
import Baby from "../../images/images-1-j-295x267.png"
import  Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png"
import Deadpool from "../../images/deadpool-ryan-reynolds-dig-295x267.png"
import Ocean from "../../images/do-magical-digital-drawings-wi-232x223.png"



function Liveauction() {
    const [seconds , setSeconds] = useState(60);
    useEffect(()=>{
        if (seconds>0) {
            setTimeout(()=>setSeconds(seconds - 1), 1000);
        }
        else{
            setSeconds("Live Now")
        }
    })

    const Live = [
        {
              img: Wick,
              id:5,
              text:"Bruce Lee",
              desc:"price",
              time:"00:00:00"
    
        },
          {       img: Baby,
                  id:4,
                  text:"Dull Baby",
                  desc:"price",
                  time:"00:00:00"
          },
          {   img:Monster,
             
              text:"Wolverine",
              desc:"price",
              id:3,
              time:"00:00:00"
          },
          {   img:Deadpool,     
              text:"Deadpool",
              desc:"price",
              id:2,
              time:"00:00:00"
          
          }
          ,{  img: Ocean,
              text:"Ocean",
              desc:"price",
              id:1,
              time:"00:00:00"
    
          }
    ]
    
    return (
        <div className = "evr-liveauction">
            <div className ="everest-live">
              <h2>Live Auction<i className="fas fa-tv"></i></h2>
          
               <button style={{width:"80px"}}>See all</button>
            </div>
            <div className = "featured-card">
        {Live.map((d) =>(
        <div className = "featuredcard-inner" style = {{marginLeft:"25px"}}>
            <img  src = {d.img} alt =""/>
            <p style = {{color:"teal",marginLeft:"10px",fontWeight:"700"}}>{seconds} Seconds  remaining</p>
            <div className= "card-rated" >{d.text} <span>50<i className="far fa-heart"></i></span></div>
            <div className = "card-price"> {d.desc} <span>1.5ETH</span></div>
            </div>
        ))}
        
        </div>
        </div>
    )
}

export default Liveauction
