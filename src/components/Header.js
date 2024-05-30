import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "./utils/useOnline";

const LoggedInUser =()=>{
  return false;
}
const Title=()=>{

 
    return(
      <a href="/">
      <img className="h-28 p-2 pl-2 pr-3" 
      src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
      alt="logo"
  /> </a>) 
  }
  const Header=()=>{
    const isOnline=useOnline();

    const [isLoggedIn,setIsLoggedIn]= useState(true);
    return(
      <div className="flex justify-between bg-orange-300">
     <Title/>
      <div className="nav-items">
       
      <ul className="flex py-10">
         <li className="px-2"><Link to="/">Home</Link></li>
         <li className="px-2"> <Link to="/about">About</Link></li>
         <li className="px-2"><Link to="/contact">Contact</Link></li> 
         <li className="px-2"><Link to="">Cart</Link></li> 
          <li className="px-2"><Link to="/instamart">Instamart</Link></li> 
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