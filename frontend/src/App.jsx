import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Assets from "./pages/Assets";
import AssetDetail from "./pages/AssetDetail";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
function App() {
  return (
    <div>
      <div className="min-h-screen bg-[#0B0F19] flex flex-col">
        <div className="md:container md:mx-auto px-4 flex-grow">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets/:coin" element={<AssetDetail />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
