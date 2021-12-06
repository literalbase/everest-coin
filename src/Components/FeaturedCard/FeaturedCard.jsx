import React from 'react';
import Mountain from "../../images/n-6ba043f112858727691bc7ca956f-295x267.png";
import Dawn from "../../images/magical-sulyman-232x223.png"
import  Monster from "../../images/d3iysj5-0e6b6ab4-a651-46dc-83f2x-464x446.png"
import Deadpool from "../../images/deadpool-ryan-reynolds-dig-295x267.png"
import Ocean from "../../images/do-magical-digital-drawings-wi-232x223.png"
import "./featuredcard.css";


function FeaturedCard() {

   const Group = [
              {
                    img: Mountain,
                    id:5,
                    text:"Mountain",
                    desc:"price"

              },
                {       img: Dawn,
                    id:4,
                        text:"Mountain",
                        desc:"price"
                },
                {   img:Monster,
                   
                    text:"Wolverine",
                    desc:"price",
                    id:3
                },
                {   img:Deadpool,     
                    text:"Deadpool",
                    desc:"price",
                    id:2
                
                }
                ,{  img: Ocean,
                    text:"Ocean",
                    desc:"price",
                    id:1
                }
        ]

    
    return (
        
        <div className = "featured-card">
        {Group.map((d) =>(
        <div className = "featuredcard-inner">
            <img src = {d.img} alt =""/>
            <div className = "card-inner">
            <div className= "card-rated">
            {d.text} 
            <span>50<i className="far fa-heart">

            </i></span></div>
            <div className = "card-price">
            <div className="sm-card">
             {d.desc} 
             <span>1.5ETH</span>
             </div>
             </div>
           </div>
              </div>
        ))}
        
        </div>
    )
}

export default FeaturedCard
