import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SideBarData";
// import './Navbar.css';
import { IconContext } from "react-icons";
import insulinlog from "../img/insulinlog.png";
import bglog from "../img/bglog2.png";
import foodlog from "../img/foodlog2.png";
import file from "../img/file.png";
import leftChevron from "../img/undo.png";
import home from "../img/homexx.png";

function SideNavBar(props) {

  const checkActive = (match, location) => {
    //some additional logic to verify you are in the home URI
    if(!location) return false;
    const {pathname} = location;
    console.log(pathname);
    return pathname === `/patient-details/${props.email}`;
  }
  //   const showSidebar = () => setSidebar(!sidebar);
  useEffect(()=>{
    console.log("props.details");

    console.log(props.details);
  });

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="navbarr">
          <Link to="#" className="menu-bars">
            {/* onClick={showSidebar} */}
        {/* <FaIcons.FaBars />
          </Link>
        </div> */}
        <nav className="nav-menu active">
          {/* onClick={showSidebar} */}
          <ul className="nav-menu-items">
            {/* <li className="navbar-toggle">
              <NavLink to="/" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </NavLink>
            </li> */}
            {/* {SidebarData.map((item, index) => { */}
            {/* return ( */}
            <li className="nav-t">
              <NavLink to="/patients" className="back-button">
                {/* {FaIcons.FaArrowLeft} */}
                <img src={leftChevron} width={35} height={35} />
                <span className="back-button">Back</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${props.email}`}
                activeClassName="active-link"
                isActive={checkActive}
                state={{
                  details:props.details
                }}

                end
              >
                <img src={home} width={35} height={35} />
                <span>Home</span>
              </NavLink>
            </li>

            <li className="nav-text">
              <Link to="">
                <img src={foodlog} width={35} height={35} />
                <span>Food</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to="">
                <img src={bglog} width={35} height={35} />
                <span>Blood Glucose</span>
              </Link>
            </li>
            <li className="nav-text">
              <NavLink
                to={`/patient-details/${props.email}/insulin`}
                activeClassName="active-link"
                // isActive={checkActive}
                state={{
                  details:props.details,
                  insulinProp: props.email,
                }}
              >
                <img src={insulinlog} width={35} height={35} />
                <span>Insulin</span>
              </NavLink>
            </li>
            <li className="nav-text">
              <Link to="">
                <img src={file} width={35} height={35} />
                <span>Formatted Record</span>
              </Link>
            </li>

            {/* ); */}
            {/* })} */}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default SideNavBar;
