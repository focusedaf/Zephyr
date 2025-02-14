import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useState } from "react";
import {Menu,X} from 'lucide-react'
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const navItems = [
    {name:'Home', slug:'/', active:true},
    {name:'Category', slug:'/category', active:true},
    {name:'About', slug:'/about', active:true},
    {name:'Contact', slug:'/contact', active:true},
    {name:'Profile', slug:'/profile', active:true}
  ]
  return (
    <div className="bg-inherit flex w-full p-5  justify-between md:justify-center items-center gap-4 md:gap-6">
      <Link to="/" className="text-3xl font-medium">
        Zephyr
      </Link>     
          
      <Menu
            onClick={() => setIsLoggedIn(true)}
            className="w-6 h-6  text-white hover:text-white md:hidden"
          />
       

     
    </div>
  );
};

export default Navbar;
