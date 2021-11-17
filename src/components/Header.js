import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";
import { signOutUser } from "../firebase";
// import { useHistory } from "react-router-dom";
import logo from "./assets/logo.png"
const Header = ({ user }) => {
  return (
    <>
      <header className="header vw-90">
        <nav className="sticky-top top-0 d-flex align-items-center w-100 py-2">
          <div className="flex-grow-1 w-25 px-4">
            <Link to="/" className="text-decoration-none">
              {/* <h5 className="text-uppercase text-decoration-none my-auto">
                SpcioPhin
              </h5> */}
              <img width="12%" src={logo} alt="logo" />
            </Link>
          </div>
          <ul className="list-unstyled text-sidebar">
            {user ? (
              <>
                <Link
                  to="/twitter"
                  className="text-decoration-none text-center mx-3"
                >
                  <li className="">Twitter</li>
                </Link>
                <Link
                  to="/instagram"
                  className="text-decoration-none text-center mx-3"
                >
                  <li className="">Instagram</li>
                </Link>
                <Link
                  to="/facebook"
                  className="text-decoration-none text-center mx-3"
                >
                  <li className="">Facebook</li>
                </Link>
                <Link
                  to="/linkedin"
                  className="text-decoration-none text-center mx-3"
                >
                  <li className="">LinkedIn</li>
                </Link>
                <Link
                  to="/marketing"
                  className="text-decoration-none text-center mx-3"
                >
                  <li className="">Marketing</li>
                </Link>

                <button
                  className="btn btn-warning btn-sm text-light mx-3 rounded"
                  onClick={() => {
                    signOutUser();
                    localStorage.removeItem("dbuseruid");
                    localStorage.removeItem("fbaccesstoken");
                    localStorage.removeItem("fbuseruid");
                    localStorage.removeItem("fbpageid");
                  }}
                >
                  SignOut
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-decoration-none mx-3">
                  <button className="btn btn-warning btn-sm text-light w-100 rounded">
                    Login
                  </button>
                </Link>
                {/* <Link
                  to="/signup"
                  className="text-decoration-none text-center mx-2"
                >
                  <button className="btn btn-warning btn-sm text-light w-100 rounded">
                    Signup
                  </button>
                </Link> */}
              </>
            )}
          </ul>
        </nav>
      </header>
      <SideBar />
    </>
  );
};

export default Header;
