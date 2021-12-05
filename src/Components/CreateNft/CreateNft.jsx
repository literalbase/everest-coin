import React from 'react'
import "./createnft.css"
import Wallet from "../../images/wallet@1X.png";
import Archive from "../../images/archive@1X.png"
import Grid from "../../images/grid@1X.png"

function CreateNft() {
 const   Create = [
     {
         img :Wallet,
         text : "Set Up Your Wallet",
         desc: "Once you’ve set up your wallet of choice,connect it to Opensea  by clicking the Nft marketplace in the top right corner Learn more about the wallet support   "
     },
     {
        img :Archive,
        text : "Create Your collection ",
        desc: "Once you’ve set up your wallet of choice,connect it to Opensea  by clicking the Nft marketplace in the top right corner Learn more about the wallet support   "
    },
    {
        img :Grid,
        text : "Add your Nfts",
        desc: "Once you’ve set up your wallet of choice,connect it to Opensea  by clicking the Nft marketplace in the top right corner Learn more about the wallet support "
    }
 ]

    return (
        <div className = "createnft-evrest">

            <div className = "createnft-evrest_card">
            <h2>Create & Sell Your NFts</h2>
            </div>
            <div className = "coin-flex-card">
        {Create.map((d)=>(
            <div className = "everest-coin-card"> 
            <div className = "inner-card"> 
             <img src = {d.img} alt = ""/>

             <h2>{d.text}</h2>

             <p>{d.desc}</p>
            </div>
            </div>
          ))}
        </div>
        </div>
    )
}

export default CreateNft
