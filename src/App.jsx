import "./App.css";

import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Demos from "./pages/Demos";
import DashBoard from "./pages/DashBoard";
function App() {
  return (
    <div className="max-sm:overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route index="/home" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/demos" element={<Demos />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
