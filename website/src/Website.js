import logo from './logo.svg';
import './Website.css';
import Banner from './Components/Banner.js';
import NavBar from './Components/NavBar.js';
import StoreTwo from './Components/StoreTwo.js';
import StoreOne from './Components/StoreOne.js';


function Website() {
  const id="Website";
  
  return (
    <div id={id} className="Website">
      
      <Banner 
        linkTitle="AFFILIATE WEBSITE TEMPLATE"
        link="#"
        text="Welcome to Our Website"
        image=""        
      />

      <NavBar />
    
      <StoreOne />
      
    </div>
  );
};

export default Website;
