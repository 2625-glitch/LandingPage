import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Works from "./components/Works";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demos from './pages/Demos';
import DashBoard from "./pages/DashBoard";
function App() {

  return (
    <div>
<BrowserRouter>
      <Routes>
        <Route index='/home' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/demos' element={<Demos/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
