import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        SeoYoon's Portfolio
      </div>
      <div className="nav">
        <a href="#home">Home</a>
        <a href="#about">about</a>
        <a href="#project">project</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
