import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
const ResturantMenu=()=>{
   
   const {resId}=useParams();
   const [resturantData,setResturantData]= useState([]);
   
   useEffect(()=>{
    getResturantInfo();
   },[])
   async function getResturantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9713073&lng=77.5920295&restaurantId="+resId);
    const json=await data.json();
       console.log(json.data);
      //setResturant(Object.values(json?.data?.cards?.card[2]?.card?.card?.info?.id));
        setResturantData(json);    
}
    return(
        <div className="Menu">
        <div>
            <img src={IMG_CDN_URL+resturantData.data?.cards[2]?.card?.card?.info?.cloudinaryImageId} alt=""/>
            <h3>resturant id:{resId}</h3>
           <p>{resturantData.data?.cards[2]?.card?.card?.info?.name}</p>
       <p>{resturantData.data?.cards[2]?.card?.card?.info?.city}</p>
        <p>{resturantData.data?.cards[2]?.card?.card?.info?.areaName}</p>
        <p>{resturantData.data?.cards[2]?.card?.info?.city}</p>
        <p>
          {resturantData?.data?.cards[2]?.card?.card?.info?.city}
         </p>
        
     </div>
     <div>
        <h1>Menu</h1>
        <ul> {
        resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (card) =>(
            <li
                key={card?.dish?.info?.id}>
                    {card?.dish?.info?.name}
            </li>
        )

        )}
        </ul>

     </div>
     
      </div>
      
       
        
    )

};
export default ResturantMenu;