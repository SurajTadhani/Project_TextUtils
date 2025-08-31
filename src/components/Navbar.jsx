import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);
  const location = useLocation();

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close nav on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        collapseRef.current &&
        !collapseRef.current.contains(event.target) &&
        event.target.getAttribute("aria-label") !==
          (isOpen ? "Close navigation menu" : "Open navigation menu")
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Dark/Light Toggle with only icon
  const DarkModeToggle = () => (
    <div
      className="d-flex align-items-center ps-3 lg-mt-4 mt-lg-0"
      style={{ cursor: "pointer" }}
      onClick={props.toggleMode}
    >
    <i
  className={`fas ${props.mode === "light" ? "fa-moon" : "fa-sun"} dark-toggle-icon`}
  style={{
    fontSize: "1.9rem",
    marginLeft: "12px",
    marginRight: "12px",
    color: props.mode === "light" ? "#333" : "#FFD43B",
  }}
></i>

    </div>
  );

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* Brand */}
        <Link className="navbar-brand fs-2 fw-bold" to="/">
          {props.title}
        </Link>
<div className="d-flex align-items-center justify-content-end gap-3 d-lg-none">
  {/* Dark Mode Toggle (mobile) */}
          <DarkModeToggle  />
        {/* Hamburger Button */}
        <button
          className="navbar-toggler p-2 border-0"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ fontSize: "1.5rem", background: "transparent" }}
        >
          {isOpen ? (
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.8rem",
                color: props.mode === "dark" ? "#ddd" : "#333",
              }}
            >
              &times;
            </span>
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </button>
</div>

        {/* ============== Mobile Sidebar ============== */}
        <div
          ref={collapseRef}
          className={`collapse navbar-collapse d-lg-none${
            isOpen ? " show" : ""
          }`}
          id="navbarSupportedContent"
          style={{
            position: "fixed",
            top: 0,
            right: isOpen ? 0 : "-280px",
            height: "100vh",
            width: "280px",
            backgroundColor: props.mode === "dark" ? "#222" : "#f8f9fa",
            boxShadow: isOpen
              ? props.mode === "dark"
                ? "-4px 0 12px rgba(0,0,0,0.7)"
                : "-4px 0 12px rgba(0,0,0,0.1)"
              : "none",
            transition: "right 0.3s ease",
            paddingTop: "4rem",
            zIndex: 1050,
          }}
        >
          
          {/* Close Button inside sidebar */}
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "1.8rem",
              background: "transparent",
              border: "none",
              color: props.mode === "dark" ? "#ddd" : "#333",
              cursor: "pointer",
            }}
          >
            &times;
          </button>

          <ul className="navbar-nav fs-5 fw-semibold">
            <li className="nav-item px-3 py-3 border-bottom">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item px-3 py-3 border-bottom">
              <Link className="nav-link" to="/speech-to-text">Speech To Text</Link>
            </li>
            <li className="nav-item px-3 py-3 border-bottom">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          
        </div>

        {/* ============== Desktop Nav ============== */}
        <div
          className="collapse navbar-collapse d-none d-lg-flex justify-content-end gap-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav fs-5 fw-semibold">
            <li className="nav-item px-3">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/speech-to-text">Speech To Text</Link>
            </li>
            <li className="nav-item px-3">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>

          {/* Dark Mode Toggle (desktop) */}
          <DarkModeToggle />
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              height: "100vh",
              width: "100vw",
              backgroundColor: "rgba(0, 0, 0, 0.4)",
              zIndex: 1040,
              cursor: "pointer",
            }}
          />
        )}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(["light", "dark"]).isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: "My-App",
  about: "About Us",
};
