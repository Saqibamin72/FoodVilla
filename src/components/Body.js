
import { resturantList } from "../../constants";
import  ResturantCard from "./ResturantCard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "./utils/Helper";
import useOnline from "./utils/useOnline";


const Body=()=>{
  //filter algorithm
 
  

 const [allResturants,setAllResturants]= useState([]) 
 const [filteredResturants,setFilteredResturants]= useState([])
 //const[resturants,setResturants]=useState([]);
  const[searchText,setSearchText]= useState("");

  useEffect(()=>{
   getResturants();
  },[]);
  
  async function getResturants(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2281&lng=75.7787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    // console.log(json);
     
        setAllResturants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredResturants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 

  }
console.log("render")


 const isOnline=useOnline();
 if(!isOnline){
  return <h1>please check your internet connect!!!.</h1>
 }
    return (allResturants?.length===0)?<Shimmer/>:(
      <>
    <div className="search-container">
      <input type="text"
      className="search-input"
      placeholder="search"
      value={searchText}
      onChange={(e)=>{
        setSearchText(e.target.value)
      }}/>

      <button 
      className="search-btn"
      onClick={()=>{
        const data=filterData(searchText,allResturants);
        setFilteredResturants(data);
      }}>Search</button>
      </div>
     
     <div className="resturant-list" >
       {
      filteredResturants.map((resturant)=>{  
          return( 
          <Link to={"/resturant/" + resturant?.info?.id}
            key={resturant?.info?.id}>
            <ResturantCard {...resturant?.info}/>
            </Link>
          );
        })
      }
           
  
      </div>
      </>
    )
  }
  export default Body;