import React from 'react'
import "./marketplace.css"
import MarketCard from '../../Components/MarketCard/MarketCard'
import Footer from "../../Components/Footer/Footer"

function Marketplace() {

    return (
        <div className = "evr-marketplace">
          <div className = "evr-marketPlace_template">
                <h2>MarketPlace</h2>
          </div>
         <div className = "marketplace">
         
      
          <MarketCard/>
         
         </div>
         <div className = "marketplace-footer">
         <Footer/>
         </div>
        </div>
    )
}

export default Marketplace
