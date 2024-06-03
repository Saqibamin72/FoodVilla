
import { useContext } from "react";
import { IMG_CDN_URL } from "../../constants";
import UserContext from "./utils/UserContext";

const ResturantCard=({name, cuisines,cloudinaryImageId, avgRating})=>{
 const {user}=useContext(UserContext)
return(
      <div className="card  w-56 h-56 p-4 m-2 shadow-lg bg-pink-50 rounded-lg">
        <img src={ IMG_CDN_URL+ cloudinaryImageId} className="w-full h-24 object-cover rounded-t-lg"/>
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <h3 className="text-sm text-gray-600">{cuisines?.join(",")}</h3>
        <h4 className="text-sm text-gray-600">{avgRating}ratings</h4>
        <h2 className=" text-sm p-2 m-2  text-gray-600">{user.name}-{user.email}</h2>
      </div>
 
    )
   
  };
  export default ResturantCard;