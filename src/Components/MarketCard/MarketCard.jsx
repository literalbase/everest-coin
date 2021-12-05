import React from 'react'
import Mountain from "../../images/n-6ba043f112858727691bc7ca956f-295x267.png";
import Dawn from "../../images/magical-sulyman-232x223.png"
import  Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png"
import Deadpool from "../../images/deadpool-ryan-reynolds-dig-295x267.png"
import Ocean from "../../images/do-magical-digital-drawings-wi-232x223.png"
import "./marketcard.css"
import { Link } from 'react-router-dom';

function MarketCard() {
    

    const Market = [
        {
              img: Mountain,
              id:5,
              text:"Mountain",
              desc:"price",
              bid:"5+"
              ,
              name:"John Doe"

        },
          {       img: Dawn,
              id:4,
                  text:"Mountain",
                  desc:"price",
                  bid:"1+"
                  ,
              name:"John Doe"
          },
          {   img:Monster,
             
              text:"Wolverine",
              desc:"price",
              id:3,
              bid:"19+"
              ,
              name:"John Doe"
          },
          {   img:Deadpool,     
              text:"Deadpool",
              desc:"price",
              id:2,
              bid:"34+"
              ,
              name:"John Doe"
          
          }
          ,{  img: Ocean,
              text:"Ocean",
              desc:"price",
              id:1,
              bid:"9+",
              name:"John Doe"

          },

        
        
  ]
    return (
       
             <div className = "market-card">
        {Market.map((d,id) =>(
           
        <div className = "marketcard-inner">
        
          <img key = {id} src = {d.img} alt =""/> 
          
            <div className = "bid"><b>{d.bid}</b><p>bid for these product</p></div>
            <div className= "card-rated" key = {id}>{d.text} <span>50<i className="far fa-heart"></i></span></div>
            <div className = "card-price" key = {id}> {d.desc} <span>1.5ETH</span></div>
           <div className = "own"> <h2> Own by</h2> <span> {d.name} </span></div>
           <hr/>
            <button className = "button">PLACE A BID</button>
            
            </div>
           
        ))}
        
        </div>
       
    )
}

export default MarketCard
