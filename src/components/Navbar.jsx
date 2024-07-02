import "./Navbar.css";
import { TiHomeOutline } from "react-icons/ti";
import { GoPerson } from "react-icons/go";
import { FiFile } from "react-icons/fi";
import { MdOutlinePhonelinkRing } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="backgroundMenu">
        <a href="#home">
          <TiHomeOutline className="icon" />
        </a>
        <a href="#about">
        <GoPerson className="icon" />
        </a>
        <a href="#project">
        <FiFile className="icon"  />
        </a>
        <a href="#contact">
          <MdOutlinePhonelinkRing className="icon"  />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
