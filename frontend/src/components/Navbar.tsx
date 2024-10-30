import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center p-4 bg-gray-800">
      <div className="text-2xl font-bold text-white">
        <NavLink to={"/"}>weBuy</NavLink>
      </div>
      <div className="flex">
        <ul className="flex space-x-6 md:space-x-8 lg:space-x-16">
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
              to={`/Contact`}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
              to={`/About`}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="cartlogo-wrapper text-white flex items-center space-x-4">
        <NavLink to="/cart/:id">
          <ShoppingCartIcon className="h-6 w-6" />
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive ? { color: "plum" } : {};
          }}
          to={`/signup`}
        >
          Signup
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
