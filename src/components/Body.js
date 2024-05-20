
import { resturantList } from "../../constants";
import  ResturantCard from "./ResturantCard";
import { useState, useEffect} from "react";


const Body=()=>{
  //filter algorithm
 
  function filterData(searchText,resturants){
    const filterData=resturants.filter((resturant)=>
       resturant?.info?.name?.includes(searchText)
    );
  return filterData;

  }

// const [allResturants,setAllResturants]= useState([]) 
 //const[filteredResturants,setFilteredResturants]= useState([])
 const[resturants,setResturants]=useState([]);
  const[searchText,setSearchText]= useState("");

  useEffect(()=>{
   getResturants();
  },[]);
  
  async function getResturants(){
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.2281&lng=75.7787&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
     // setAllResturants(json?.data?.cards[2]?.card?.card);
     // setFilteredResturants(json?.data?.cards[2]?.card?.card);
        setResturants(json?.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

 

  }
console.log("render")
    return(
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
        const data=filterData(searchText,resturants);
        setResturants(data);
      }}>Search</button>
      </div>
     
     <div className="resturant-list" >
       {
      resturants?.map((resturant)=>{  
          return <ResturantCard {...resturant?.info} key={resturant?.info?.id}/>
        })
      }
           
  
      </div>
      </>
    )
  }
  export default Body;