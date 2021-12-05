import React from 'react'
import "./footer.css"
import Logo from "../../images/everest-coin3-506x99.png"
function Footer() {
    return (
        <div className="footer-everest">
        <div className="footer-row">
          <div className="footer-column">
            <div className="footer-img">
              
                <img src={Logo} alt="Mobirise" />
              
            </div>
          </div>
          <div className="footer-col1">
            <h5 className="footer-col1-01">
              <strong>Marketplace</strong>
            </h5>
            <p className="footer-col2">
              All NFTs
              <br />
              How It Works
              <br />
              Create
              <br />
              Explore
              <br />
              Privacy &amp; Terms
              <br />
            </p>
            <div className="social-row">
              <div className="soc-item">      
                     <i className="fab fa-twitter" ></i>
                     </div>
              <div className="soc-item">
              <i class="fab fa-facebook"></i>
              </div>
              <div className="soc-item">
              <i className="fab fa-instagram"></i>
              </div>
              <div className="soc-item">
              <i className="fab fa-telegram" ></i>
              </div>
            </div>
          </div>
          <div className="footer-col-lg-3">
            <h5 className="footer-col3">
              <strong>Community</strong>
            </h5>
            <ul className="footer-evr-row">
              <li className="footer-row">Help Center</li>
              <li className="footer-row">Partners</li>
              <li className="footer-row">Suggestions</li>
              <li className="footer-row">Blog</li>
              <li className="footer-row">Newletter</li>
            </ul>
          </div>
         
        </div>
          <div className="footer-copyright">
            <p className="copyright-box">
              © Copyright 2021 EverestCoin - All Rights Reserved
            </p>
          </div>
      </div>
    )
}

export default Footer
