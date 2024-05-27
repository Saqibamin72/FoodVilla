const Shimmer=()=>{
    return(
        Array(9).fill("").map((e,index)=><div key={index} className="Shimmer-card"></div>)
        
    );
}
export default Shimmer;