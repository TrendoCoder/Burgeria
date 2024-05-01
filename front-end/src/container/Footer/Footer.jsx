import React from "react";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { images } from "../../constants";
const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
      <h1 className="app__footer-headtext">Contact Us</h1>
      <p className="p__opensans">Adress of your office</p>
      <p className="p__opensans">+92 385738393</p>
      <p className="p__opensans">+92 536382837</p>
      </div>
      <div className="app__footer-links_logo">
<img src={images.gericht} alt="logo" />
<p className="p__opensans">The best way is to find yourself is to lose yourself in the service of others.</p>
<img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop:'15px'}}/>
<div className="app__footer-links_icons">
  <FiFacebook/>
  <FiTwitter/>
  <FiInstagram/>
</div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Monday - Friday</h1>
      <p className="p__opensans">10am - 1am</p>
      <p className="p__opensans">Saturday - Sunday</p>
      <p className="p__opensans">12pm - 3am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Burgeria. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
