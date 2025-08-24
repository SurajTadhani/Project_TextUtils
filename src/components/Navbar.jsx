import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const collapseRef = useRef(null);
  const location = useLocation();

  // Close nav on route change (user clicks any link)
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close nav on outside click except toggle button
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

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        {/* Brand / Title */}
        <Link className="navbar-brand fs-2 fw-bold" to="/">
          {props.title}
        </Link>

        {/* Hamburger / Close Toggle Button */}
        <button
          className="navbar-toggler p-2 border-0"
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((prev) => !prev)}
          style={{ fontSize: "1.5rem", background: "transparent" }}
        >
          {isOpen ? (
            <span
              style={{ fontWeight: "bold", fontSize: "1.8rem", color: props.mode === "dark" ? "#ddd" : "#333" }}
            >
              &times;
            </span>
          ) : (
            <span className="navbar-toggler-icon" />
          )}
        </button>

        {/* Sliding Mobile Nav Panel */}
        <div
          ref={collapseRef}
          className={`collapse navbar-collapse${isOpen ? " show" : ""}`}
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
          {/* Close button inside panel for accessibility (optional, since toggle button also present) */}
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-3 py-3 border-bottom">
              <Link className="nav-link" to="/speech-to-text">
                Speech To Text
              </Link>
            </li>
            <li className="nav-item px-3 py-3 border-bottom">
              <Link className="nav-link" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>

          {/* Dark Mode Toggle */}
          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            } ps-3 mt-4`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
              style={{ cursor: "pointer" }}
            >
              {props.mode === "light"
                ? "Enable Dark Mode"
                : "Disable Dark Mode"}
            </label>
          </div>
        </div>

        {/* Overlay when menu is open */}
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
