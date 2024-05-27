import { useRouteError } from "react-router-dom";
import { Elogo } from "../../constants"


const Error=()=>{
    const{status,statusText}= useRouteError();
  
    return(
        <div className="error" ><h1> Oops Something went wrong</h1>
           <img  className="error-img"src={Elogo} alt="Error"/>
           <h2>{status+":"+statusText}</h2>
        
        </div>
    )
}
export default Error;