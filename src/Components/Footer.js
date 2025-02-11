import React from 'react';
import "../Style/Footer.css"
import BB from '../Content/PNG/Silver.png'
import {Container, Col, Row, Media } from "react-bootstrap";
import SocialMediafb from '../Content/Icons/facebook.svg';
import SocialMediainsta from '../Content/Icons/instagram.svg';
import SocialMediatwitter from '../Content/Icons/twitter.svg';
const Footer=()=>{
    return(


        <Container fluid>
            <Row className="justify-content-around footersection">
            <Col lg={6} xl={6} md={6} sm={6} xs={12} className="firstsection">

            <div>
            <a href="#"> <img className="Logo" src={BB}/></a>
            <p class="sectioncontent1">
            BabaBeard is a private beard oil company that manufacture 100% organic beard oil.
            </p>
            <p>
            <a style={{marginRight:'10px'}} href="www.facebook.com/bababeardco">   <img src={SocialMediafb} width="20px" height="30px"/> </a>
                 <a style={{marginRight:'10px'}} href="www.instagram.com/bababeardco">  <img src={SocialMediainsta} width="20px" height="30px"/> </a>  
                 <a href="www.twitter.com/bababeardco">      <img src={SocialMediatwitter} width="20px" height="30px"/> </a>    
            </p>
            <p>
            Got any query?
                  <br/>  Send us an email on <a href="support@bababeard.com">support@bababeard.com</a>
            </p>
            </div>

            </Col>

            <Col lg={2} xl={2} md={6} sm={6} xs={12} className="secondsection">

            
            <div>
          <p className="footerheading">
              Product
          </p>
            <p> <a className="linktag" href="/RewardPolicy"> Reward Policy</a></p>
                    <p> <a className="linktag" href="/ReplacingPolicy ">Replacing Policy </a></p>
                    <p> <a className="linktag" href="/RefundPolicy"> Refund Policy</a></p>
    
                    <p> <a className="linktag" href="/Blogs">Blogs </a></p>

            </div>
            </Col>

            <Col lg={2} xl={2} md={6} sm={6} xs={12} className="thirdsection">

            <div>
            <p className="footerheading">Engage  </p>
                
                    <p> <a className="linktag" href="landingpageBB.html">BabaBeard</a> </p>
                    <p> <a className="linktag" href="/FAQS"> FAQS</a></p>
                    <p> <a className="linktag" href="/RewardPolicy"> Rewards</a></p>
                    <p> <a className="linktag" href="/About"> About Us</a></p>
                    <p> <a className="linktag" href="/PrivacyPolicy"> Privacy Policy</a></p>
                    <p> <a className="linktag" href="/Terms"> Terms of Service </a></p>
    
                </div> 
            </Col>

            <Col lg={2} xl={2} md={6} sm={6} xs={12} className="fourthsection">
            <div>   
                  <p className="footerheading">
                    Contact
                 </p>
               
                    <p><a className="linktag" href="/contactus"> Contact us </a> </p>
    </div>
            

            </Col>
            </Row>
         </Container>   
    
    );
}

export default Footer;