import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {true ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active text-white"
                    aria-current="page"
                    href="/">
                    Home
                  </Link>
                </li>
              ) : null}
              <li className="nav-item">
                <Link className="nav-link text-white" href="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" href="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
               <input type="text" placeholder="Search..."/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
