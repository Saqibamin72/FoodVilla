import { resturantList } from "../../constants"
import  ResturantCard from "./ResturantCard"
const Body=()=>{
    return(
      <div className="resturant-list" >
       {
        resturantList.map((resturant)=>{
          return <ResturantCard {...resturant.info} key={resturant.info.id}/>
        })
       }
           
  
      </div>
    )
  }
  export default Body;