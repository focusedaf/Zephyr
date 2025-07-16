import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [Visible, setVisible] = useState(false);
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
      <Link to="/" className=" text-3xl font-medium md:hidden">
        Zephyr
      </Link>

      <div className="hidden md:flex gap-5 rounded-full px-5 py-2 border border-gray-800 bg-gray-900">
        <Link
          to="/"
          className="hover:backdrop-blur-sm hover:bg-white/20 font-medium md:rounded-full md:text-lg md:px-4 md:py-1 "
        >
          Zephyr
        </Link>
        <div className=" ">
          <ul className="flex gap-5 ">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="px-4 py-2  rounded-full cursor-pointer hover:backdrop-blur-sm hover:bg-white/20 "
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:hidden  ">
        <Menu
          onClick={() => setVisible(!Visible)}
          className="w-6 h-6  text-white hover:text-white cursor-pointer"
        />

        <ul
          className={`absolute top-20 left-0 right-0 w-full  font-semibold backdrop-blur-sm flex flex-col gap-5 transfrom transistion-transform  ${
            Visible ? "opacity-100" : "opacity-0 pointer-events-none"
          } transform 0.3s ease opacity 0.3s ease `}
        >
          <div className="flex justify-end mr-6 ">
            <X
              className="w-6 h-6 text-gray-500"
              onClick={() => setVisible(false)}
            />
          </div>
          {navItems.map(
            (item) =>
              item.active && (
                <NavLink
                  key={item.name}
                  onClick={() => setVisible(false)}
                  className="py-3 pl-6 border block"
                  to={item.slug}
                >
                  {item.name}
                </NavLink>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
