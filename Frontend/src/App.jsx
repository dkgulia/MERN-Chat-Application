import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {HomePage} from '../Components/HomePage.jsx';
import {Signup} from "../Components/Signup.jsx";
import {Login} from "../Components/Login.jsx"




const router = createBrowserRouter([
  {
    path:"/",
    element:<HomePage/>
  },
  {
    path:"/register",
    element:<Signup/>
  },
  {
    path:"/login",
    element:<Login/>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='p-4 h-screen items-center justify-center  text-red-500'>
         <RouterProvider router ={router}/>
        
    </div>
  )
}

export default App
