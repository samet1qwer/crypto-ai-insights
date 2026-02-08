import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/Register";

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
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
