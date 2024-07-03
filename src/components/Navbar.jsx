/* eslint-disable react/no-unescaped-entities */
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navbar-example2" className="navbar navbar-dark bg-dark fixed-top">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a className="nav-link" href="#home">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#project">
            Project
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
