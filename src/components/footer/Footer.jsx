import React from "react";
import "./Footer.css";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="wrap row text-white">
        <div className="social-icons d-flex justify-content-center align-items-center pt-4 pb-2 flex-column col-sm-4">
          <p className="mb-0">Visit Our Social Media</p>
          <ul className="d-flex list-unstyled gap-4 ">
            <li><a className="text-white" href="https://www.facebook.com/Seenima-107535752097248/"><BsFacebook /></a></li>
            <li><a className="text-white" href="https://www.instagram.com/seenimareact/?fbclid=IwAR0zNcJFelplw3_smLpSfvh8vdvQ99BdQRPQnvyfuTDjRVX4aK1CXnAsfuo"><BsInstagram /></a></li>
            <li><a className="text-white" href="https://twitter.com/Seenimaaa"><BsTwitter /></a></li>
          </ul>
        </div>
        <div className="app-name d-flex justify-content-center align-items-center flex-column pb-2 pt-4 col-sm-4">
          <h1>SEENIMA</h1>
          <p>&#169; copyright 2022</p>
        </div>
        
        <div className="d-flex justify-content-center align-items-center col-sm-4 pb-2 pt-4 useful-links">
          <ul className="d-flex gap-4 list-unstyled">
            <li><Link to="/about"></Link>Cinema </li>  
            <li>Showing</li>
            <li>Promos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
