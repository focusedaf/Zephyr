import "./App.css";
import { Route, Routes } from "react-router-dom";
import { SplashScreen } from "./Components/index";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Category from "./Pages/Category";
import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
import Posts from "./Pages/Posts";
function App() {
  return (
    <div className="w-full">
      {/* <>
        <SplashScreen />
      </> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/post" element={<Posts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
