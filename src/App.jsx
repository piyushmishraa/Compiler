import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Program from './Program';

function App() {

  const appRouter= createBrowserRouter([
    {
      path:"/",
      element:<Login/>

    },
   
  ])

  return (
    
     <div>
     <RouterProvider router={appRouter}/>
    </div>
    
  )
}

export default App
