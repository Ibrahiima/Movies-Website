import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const lengthOfWatchList = useSelector(
    (state) => state.watchList.watchListValues.length
  );

  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#333" }}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/" style={{ color: "#fff", fontWeight: "bold" }}>
          Movies App
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none", color: "#fff" }}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/"
              style={{ color: "#fff", marginRight: "15px" }}
            >
              HomePage
            </NavLink>
            <NavLink
              className="nav-link"
              to="/registertion"
              style={{ color: "#fff", marginRight: "15px" }}
            >
              Registration
            </NavLink>
            <NavLink
              className="nav-link position-relative"
              to="/watchList"
              style={{ color: "#fff" }}
            >
              WatchList
              <span className="badge bg-primary rounded-pill" style={{ fontSize: "12px", top: "-8px", right: "-8px" }}>
                {lengthOfWatchList}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
