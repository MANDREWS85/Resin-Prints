import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from "./Button"

///   ROUTES   ////////////
import RouteOne from "../Routes/RouteOne";
import Home from "../Routes/Home";

import StoreTwo from "../Components/StoreTwo";
import StoreOne from "../Components/StoreOne";

export default function NavBar() {
  const id="NavBar"
  return(
    <div id={id}>
      
      <div>
        <Link to="/StoreOne">
          <Button 
            text="STORE ONE"
            link="#"
          />       
        </Link>
      </div>

      <div>
        <Link to="/StoreTwo">
          <Button 
            text="STORE TWO"
            
          />       
        </Link>
      </div>
      

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/StoreOne" element={<StoreOne />} />
        <Route path="/StoreTwo" element={<StoreTwo />} />
      </Routes>
    </div>
  )

  
}