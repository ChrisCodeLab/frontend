import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        {/* Logo / Brand → Landing Page */}
        <Link to="/">ChrisCodeLab</Link>

        {/* Contact Us navigation*/}
        <div className="nav-links">
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;