
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
    <div className="search-container p-5 bg-inherit my-5">
      <input type="text"
      className="search-input"
      placeholder="search"
      value={searchText}
      onChange={(e)=>{
        setSearchText(e.target.value)
      }}/>

      <button 
      className="p-2 m-2 bg-orange-300 text-white rounded-md"
      onClick={()=>{
        const data=filterData(searchText,allResturants);
        setFilteredResturants(data);
      }}>Search</button>
      </div>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4" >
       {
      filteredResturants.map((resturant)=>{  
          return( 
          <Link to={"/resturant/" + resturant?.info?.id}
            key={resturant?.info?.id}
            className="block transform transition duration-300 hover:scale-105">
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