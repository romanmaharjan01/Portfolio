import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <NavLink to="/" className="brand">
          Roman Maharjan
        </NavLink>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/feedback">Feedback</NavLink>
          <NavLink to="/contact" className="btn-small">
            Hire Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
