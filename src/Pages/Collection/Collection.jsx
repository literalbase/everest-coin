import React from 'react';
import "./collection.css";
import First from "../../images/images-1-j-295x267.png"
import Third from "../../images/images-7-366x241.png"
import Fifth from "../../images/magical-sulyman-232x223.png"
import Footer from '../../Components/Footer/Footer';

function Collection() {
    const Collection = [
        {window:Third

        },
        {
            window:Third,
            pic:Fifth,
            net:First,
            fourth:First

        },
        {
            window:Third

        }
    ]
    return (
        <>
         <div className ="sign-up">
     <h2 className = "connect">My Collection </h2>
       </div>
        <div className = "collection">

            <div className = "evr-collection">
            <div className = "h2-evr">
              <h2> All</h2>
              <h2> Popular</h2>

            </div>
             <>
             <div className = "card-pg">
            {Collection.map((d)=>( 
            <div className= "evr-card">
              <img src= {d.window} alt =""/>
              <div className = "evr-card-img">
              <img src= {d.pic} alt =""/>
              <img src= {d.net} alt =""/>
              <img src= {d.fourth} alt =""/>
              </div>
            </div>
            ))}
            </div>
            
</>
            </div>
            <div className="footer-signup">
         <Footer/>
         </div>
        </div>
        </>
    )
}

export default Collection
