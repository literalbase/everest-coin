import React from 'react'
import "./body.css"
import { Adpage,Topseller,Featured,Explore,Liveaution,CreateNft,Footer } from '..'
function Body() {
    return (
        <div>
       
       <div className = "everest-md_content">
       <Adpage/>
       <Featured/>
       </div>
       <div className = "topseller-evr">
       <Topseller/>
       </div>
       <div className = "explore-evr">
       <Explore/>
       </div>
    
       <div className = "liveauction-evr">
      <Liveaution/>
       </div>
    
       <div className = "createnft-evr">
      <CreateNft/>
       </div>
       <div className = "everest-foot">
      <Footer/>
       </div>
        
        </div> 
       
    )
}

export default Body
