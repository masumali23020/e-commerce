import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from 'react';
import { Link } from "react-router-dom";
import "./Navber.scss";

const Navber = () => {
  return (
    <div className='navber'>
        <div className="wrapper">
            <div className="left">
            <div className="item">
            <img src="/img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className ="link" to="/products/1">Women</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">Men</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">Children</Link>
          </div>
        </div>
           
            <div className="right"></div>
            <div className="icons"></div>
        </div>

    </div>
  )
}

export default Navber