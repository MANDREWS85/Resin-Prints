import logo from './logo.svg';
import './Website.css';
import Banner from './Components/Banner.js';
import NavBar from './Components/NavBar.js';
import StoreTwo from './Components/StoreTwo.js';
import StoreOne from './Components/StoreOne.js';
import OpenAI from './Components/OpenAI.js';

import Home from './Routes/Home.js';


function Website() {
  const id="Website";
  
  return (
    <div id={id} className="Website">      
      <Banner 
        linkTitle="Surrogate Miniature Resin Prints"
        link="#"
        text="Warhammer 40k Proxy Models"
        image=""        
      />

      {/* <NavBar /> */}
      <StoreOne />
      <Home /> 
      
      
    </div>
  );
};

export default Website;
