import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import  Home from "./pages/Home";

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
