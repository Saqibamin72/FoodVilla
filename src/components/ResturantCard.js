
import { IMG_CDN_URL } from "../../constants";

const ResturantCard=({name, cuisines,cloudinaryImageId, avgRating})=>{
 
return(
      <div className="card">
        <img src={ IMG_CDN_URL+ cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>{cuisines.join(" ,")}</h3>
        <h4>{avgRating}ratings</h4>
      </div>
    )
   
  };
  export default ResturantCard;