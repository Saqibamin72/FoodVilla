
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../constants";
import useResturant from "./utils/useResturant";
const ResturantMenu=()=>{
   
   const {resId}=useParams();
   const resturantData=useResturant(resId);
  
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
        {/* <h1>Menu</h1>
        <ul> {
        resturantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards?.map(
            (card) =>(
            <li
                key={card?.dish?.info?.id}>
                    {card?.dish?.info?.name}
            </li>
        )

        )}
        </ul> */}

     </div>
     
      </div>
      
       
        
    )

};
export default ResturantMenu;