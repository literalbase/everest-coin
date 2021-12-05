import React from 'react'
import "./create.css"
import Rose from "../../images/photo-1529626455594-4ff0802cfb2x-110x110.png";
import { Footer } from '../../Components';

function Create() {
    const Social = ()=>(
        <>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
        </>
    )
    return (
        <div className = "create">
        <div>
           <h2 className = "create-h2">Create </h2>
    </div>
    <div className = "bg-div-box">
    <div className = "profile-card">
        <img src = {Rose} alt=""/>
        <h3>Smith Ora</h3>
        <p>smithora.com</p>
        <div className = "social">
        <button>follow</button>
        <Social />
        
        </div>
    </div>
     <div className = "bg-inner">
     <div className = "item1">
     <label >Choose File</label><input></input>
     </div>
     <div className = "item1">
     <label >Item Name</label><input></input>
     </div>
     <div className = "txtarea">
     <label>Item Description</label><textarea></textarea>
      </div>

     <div className = "item-description">
       <label>Item Price(in BNB/ETH) <input/> </label>
       <label>Royalty <input/> </label>

     </div>
     <div className = "item-description2">

       <label>Size<input/> </label>
       <label>Number of copies <input/> </label>

     </div>
     <div className = "checkbox">
       <input type= "checkbox" /> <span>Put on sale</span>
       <input type= "checkbox" /> <span>Instant sale</span>
       <input type= "checkbox" /> <span>Unlocked Purchaced</span>
       </div>
       <button>Create Item</button>
     </div>
    </div>
    <div className = "footer">
    <Footer/>
      </div>
       </div>
        
    )
}

export default Create
