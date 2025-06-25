import React from "react";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Portfolio from "./pages/Portfolio";
const App=()=>{
   
   const router=createBrowserRouter([
    {
      path: "/",
      element:<Layout/>,
      children:[
        {index:true,element:<Home/>},
        {path:"contact",element:<Contact/>},
        {path:"portfolio",element:<Portfolio/>},
        {path:"*",element:<NotFound/>} 
      ]
    }
   ])
   return(
    <div>
    {/* the router is get passed like a prop */}
      <RouterProvider router={router}/> 
    </div>
   )

    
  
}

export default App
