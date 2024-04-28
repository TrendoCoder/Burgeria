import React from 'react';
import {images} from "../../constants";
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => 
{
  return(
    <div className="app__header app__wrapper section__padding" id='homw'>
      <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour"/>
      <h1 className="app__header-h1">
        The Key to Fine Dining
      </h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>Burgeria the Land of burgers, here you can enjoy the variety of burgers in a much more premium way with affortable prices. Enjoy the meal!!</p>
      <button type="button" className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
      <img src={images.welcome} alt="HeaderImage" />
      </div>
    </div>
  )
}

export default Header;
