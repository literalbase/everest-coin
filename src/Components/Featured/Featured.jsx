import React from 'react';
import "./featured.css";
import FeaturedCard from '../FeaturedCard/FeaturedCard';
import { Link } from 'react-router-dom';

function Featured() {
   
    return (
        
        <div className ="everest-featured">
        <div className ="everest-featured_faricon-see_all">
          <h2>Featured<i className="far fa-star"></i></h2>
          <Link to = './Collection' className ="everest-featured_faricon-see_all"><button style={{width:"80px"}}>See all</button></Link>
          
        </div> 
        <div className = "featured-card">
          <FeaturedCard/>
        </div>
        </div>
        
    )
}

export default Featured
