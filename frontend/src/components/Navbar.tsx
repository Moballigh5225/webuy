import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between  items-center">
      <div className="text-2xl font-bold text-white">weBuy</div>
      <div className="flex">
        <ul className="flex space-x-16">
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
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "plum" } : {};
              }}
              to={`/signup`}
            >
              Signup
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="cartlogo-wrapper flex">
        <NavLink to="/cart">
          <ShoppingCartIcon className="size-6 text-white" />
        </NavLink>
        "
      </div>
    </nav>
  );
};

export default Navbar;
