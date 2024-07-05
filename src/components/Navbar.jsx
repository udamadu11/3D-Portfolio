import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="header">
      <Link to="home" smooth={true} duration={500}>
        <span className="w-full h-18 object-contain font-bold text-red-500 p-3 cursor-pointer logo">
          UM
        </span>
      </Link>
      <nav className="flex text-lg gap-7 font-medium text-gray-300 cursor-pointer">
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          Skills
        </Link>
        <Link to="work" smooth={true} duration={500}>
          Works
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
