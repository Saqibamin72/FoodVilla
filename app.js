import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import About from "./src/components/About";
import { useRouteError } from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";



const AppLayOut=()=>{
  return(
    <React.Fragment>
      <Header/>
      <Outlet/>
      <Footer/>
    </React.Fragment>
  )
}
const appRouter=createBrowserRouter([

  {
    path:"/",
    element:<AppLayOut/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      },
    ]
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);