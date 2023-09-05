import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className=" flex justify-between items-center h-24 max-w-[1240] mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="avatar">
            <div className="md:w-20 w-8 mr-1 rounded-full">
              <img className="" src={logo} alt="logo" />
            </div>
          </div>
          <h1 className="md:text-5xl font-bold text-[#D01C39]">World</h1>
        </div>
        <div className="w-5/12">
          <input
            type="text"
            placeholder="Search any Books"
            className="input input-bordered w-full bg-gray-50"
          />
        </div>
        <ul className="hidden md:flex uppercase font-bold">
          <li className="p-2  hover:text-[#D01C39]">
            <Link to="/allBooks">All Books</Link>
          </li>
          <li className="p-2  hover:text-[#D01C39]">
            <Link to="/addNew">Add New</Link>
          </li>
          <li className="p-2 hover:text-[#D01C39]">
            <Link to="/signIn">Sign In</Link>
          </li>
          <li className="p-2 hover:text-[#D01C39]">
            <Link to="/signUp">Sign Up</Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed left-0 top-0 w-[100%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <div className="flex justify-between items-center">
            <h1 className="text-1xl uppercase underline  underline-offset-8 w-full font-bold text-white m-4">
              Categories
            </h1>
            <div onClick={handleNav} className="text-white p-4">
              {!nav && <AiOutlineClose size={25} />}
            </div>
          </div>
          <ul className=" uppercase p-4 text-white font-semibold">
            <li className="p-3  hover:text-[#D01C39]">
              <Link to="/allBooks">All Books</Link>
            </li>
            <li className="p-3  hover:text-[#D01C39]">
              <Link to="/addNew">Add New</Link>
            </li>
            <li className="p-3 hover:text-[#D01C39]">
              <Link to="/signIn">Sign In</Link>
            </li>
            <li className="p-3 hover:text-[#D01C39]">
              <Link to="/signUp">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
