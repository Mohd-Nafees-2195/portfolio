import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import {Toaster} from 'react-hot-toast'
import  Home from "./pages/Home";

const App=()=> {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full overflow-x-clip">
      <Toaster/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
