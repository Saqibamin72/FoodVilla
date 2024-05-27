import { useEffect, useState } from "react";
import { Fetch_Menu_Url } from "../../../constants";
const useResturant=(resId)=>{
    const [resturantData,setResturantData]= useState([]);
   
    useEffect(()=>{
     getResturantInfo();
    },[])
    async function getResturantInfo(){
     const data=await fetch(Fetch_Menu_Url+resId);
     const json=await data.json();
        console.log(json.data);
       //setResturant(Object.values(json?.data?.cards?.card[2]?.card?.card?.info?.id));
         setResturantData(json);    
 }  
 return resturantData;
}
export default useResturant;