import React from "react";
import "./NavBar.css";
import { Button, Dropdown, Space } from "antd";
// import { IoChevronDownOutline } from "react-icons/io";
import { BiCaretDown } from "react-icons/bi";
import {
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsCamera,
} from "react-icons/bs";
import { NavLink, Link } from "react-router-dom";

const items = [
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" to="./Gallery">
        Nature
      </NavLink>
    ),
  },
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" to="./Gallery">
        People
      </NavLink>
    ),
  },
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" to="./Gallery">
        Animals
      </NavLink>
    ),
  },
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" to="./Gallery">
        Sports
      </NavLink>
    ),
  },
  {
    key: "1",
    label: (
      <NavLink rel="noopener noreferrer" to="./Gallery">
        travel
      </NavLink>
    ),
  },
];
const NavBar = () => {
  return (
    <div className="header">
      <div className="main-navbar">
        <nav class="navbar fixed-top navbar-expand-lg ">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <a class="logo navbar-brand mt-2 mt-lg-0" href="#">
                <i>
                  <BsCamera />
                </i>
                <h1>PhotoFolio</h1>
              </a>

              <ul class="navbar-nav m-auto">
                <li class="nav-item">
                  <NavLink to="./" className="">
                    HOME
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="./About">ABOUT</NavLink>
                </li>
                {/* <Space> */}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    placement="bottomLeft"
                    className="drp"
                  >
                    <h className="wra">
                      GALLERY <BiCaretDown />
                    </h>
                  </Dropdown>
                {/* </Space> */}
                <li class="nav-item">
                  <NavLink to="./SERVICES">SERVICES</NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="./CONTACT">CONTACT</NavLink>
                </li>
              </ul>
            </div>

            <div class="social-links d-flex align-items-center">
              <a href="">
                <BsTwitter />
              </a>
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <BsInstagram />
              </a>
              <a href="">
                <BsLinkedin />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
