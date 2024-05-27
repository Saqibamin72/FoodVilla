import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import Footer from "./src/components/Footer"
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";
import Profile from "./src/components/Profie";
import Shimmer from "./src/components/Shimmer";


const Instamart=lazy(()=> import("./src/components/Instamart"))//below written names
const About=lazy(()=>import("./src/components/About"));
//lazy loading
//dynamic loadingS
//chunking
//dynamic bundling
//o demand loading
//code spliting


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
        element:(<Suspense fallback={<h1>Loading...</h1>}>
          <About/>
          </Suspense>
        ),
        children:[
          {
            path:"profile",
            element:<Profile/>
          }
        ],
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/resturant/:resId",
        element:<ResturantMenu/>
      },
      {
        path:"/instamart",
        element:(
        <Suspense fallback={<Shimmer/>}>
          <Instamart/>
          </Suspense>
          )
      },
    ]
  }
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router= {appRouter}/>);