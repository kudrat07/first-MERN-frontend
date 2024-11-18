import { Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          MERN
        </a>
        <div className="navbar navbar-collapse collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/all" className="nav-link" >
                All Post
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
