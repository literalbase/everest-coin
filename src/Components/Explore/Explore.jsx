import React from 'react';
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import "./explore.css";


function Explore() {
    return (
        <div className = "evr-explore">
            <div className ="evr-explore_txt">
          <h2>Explore</h2>
          
          <button style={{width:"80px"}}>All Nfts</button>
          <button style={{width:"80px"}}>Art</button>
          <button style={{width:"80px"}}>Collection</button>
        </div> 
        <div className = "featured-card">
          <FeaturedCard/>
         
        </div>
        </div>
    )
}

export default Explore
