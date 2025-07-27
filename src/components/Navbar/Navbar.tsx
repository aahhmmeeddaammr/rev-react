import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black pt-1 pb-3 border-b-2 border-gray-800 fixed top-0 end-0 start-0 z-10">
      <div className="main-container flex justify-between items-center">
        <div className="">
          <Link
            className="bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent text-3xl drop-shadow-xl drop-shadow-blue-600 font-semibold "
            to={"/"}
          >
            Logo
          </Link>
        </div>
        <div className="links text-white">
          <ul className="nav-links flex gap-3">
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
