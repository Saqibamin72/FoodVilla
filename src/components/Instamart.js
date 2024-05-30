import { useState } from "react"

const Section = ({ title,description }) => {
    const [isVisible, setIsVisisble]= useState(false);
    return (
        <div className="border border-black p-2 m-0">
            <h3 className="font-bold text-xl">{title}</h3>
            
            {
              isVisible ? (<button  onClick={()=>setIsVisisble(false)}className="cursor-pointer underline">
              Hide</button>):
                (<button  onClick={()=>setIsVisisble(true)}className="cursor-pointer underline">
                Show</button>)
            }
                
            {isVisible && <p>{description}</p>}
        </div>
    )
}
const Instamart = () => {

    return (
        <div>
            <h1 className="text-3xl font-bold m-2 p-2">Instamart</h1>
            <Section 
            title={"About Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
             <Section 
            title={"Team Instamart"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
               <Section 
            title={"Careers"}
            description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
            />
        </div>
    )
}
export default Instamart;