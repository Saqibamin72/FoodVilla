import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

const LoggedInUser =()=>{
  return false;
}
const Title=()=>{

 
    return(
      <a href="/">
      <img className="logo" 
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      alt="logo"
  /> </a>) 
  }
  const Header=()=>{
    const isOnline=useOnline();

    const [isLoggedIn,setIsLoggedIn]= useState(true);
    return(
      <div className="Header">
     <Title/>
      <div className="nav-items">
       
      <ul>
         <li><Link to="/">Home</Link></li>
         <li> <Link to="/about">About</Link></li>
         <li><Link to="/contact">Contact</Link></li> 
          <li>Cart</li>
        </ul>
        
      </div> 
      
      <h1>{isOnline? "✅":"🔴"}</h1>  
      {
       isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)} >Logout</button> : <button onClick={()=>setIsLoggedIn(true)}>Login</button>
      }
      </div>

    );
  };
  export default Header;