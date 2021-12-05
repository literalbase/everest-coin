import React from 'react';
import "./topseller.css"
import David from "../../images/david-gandy-1200x8002x-118x122.png"
import Serah  from "../../images/photo-1529626455594-4ff0802cfb2x-110x110.png" 

function Topseller() {
const Top = [
    {
        img:David,
        name:"John mcMany",
        item:"129| items"
    },
    {
        img:Serah,
        name:"Rita Cameron",
        item:"10| items"
    },
    
    {
        img:Serah,
        name:"Rita Cameron",
        item:"130| items"
    },
  
]

    return (
        <div className = "evr-topseller">
            <h2>Top Sellers</h2>
        {
            Top.map((d)=>(

            <div className = "evr-topseller-card">
              <img src = {d.img} alt = ""/>
              <div className = "evr-name-eth">{d.name} <span>232ETH</span> </div>
              <div className = "item">{d.item}</div>
            </div>
            ))}
        </div>
    )
}

export default Topseller
