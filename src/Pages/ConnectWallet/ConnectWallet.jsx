import React from 'react';
import "./connectwallet.css";
import MetaMask from "../../images/metamask.png"
import Asset from "../../images/asset-53001x-8-113x123.png"
import Coin from "../../images/bnb.png"
import Ethereun from "../../images/ethereum.png"
import TrustWallet from "../../images/trustwallet.png"
import Wallet from "../../images/a5169900-c66c-11e9-8592-33c733-117x117.png";
import Footer from "../../Components/Footer/Footer"

function ConnectWallet() {
    const Connect = [
        {
            img:MetaMask,
            desc:"Metamask"
        },
        {
            img:TrustWallet,
            desc:"Trust Wallet"
        },
        {
            img:Wallet,
            desc:"Wallet Connect"
        }
    ]
    return (
        <div className = "connect-wallet">
             <div className ="connect-wallet-address">
          <h2 className = "connect">
          Wallet Connect 
           <img src = {Asset} alt = ""/>
           <img src = {Coin} alt = ""/>
           <img src = {Ethereun} alt = ""/>
           </h2>
         
            </div>
             
            <div className = "big-div">
                 <h2>Connect Your Wallet</h2>
                 <div className = "meta-div">
                 {Connect.map((d)=>(
            <div className = "meta"> 
                <img src = {d.img} alt = ""/>
                <h2>{d.desc}</h2>
             </div>
                 ))}
                 </div>
            </div>
            <div style = {{backgroundColor:"#0C0E1A",border:"1px solid rgba(0,0,0,.125)"}}>
            <Footer/>
            </div>
        </div>
    )
}

export default ConnectWallet
