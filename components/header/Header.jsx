import React, {useState, useEffect} from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { images } from "../../management";
import { Link } from "react-router-dom";
import {NavLink} from 'react-router-dom';
import axios from "axios";

window.onscroll = function () {
  if (window.scrollY >= 80) {
    document.getElementById("navydevy").classList.add("active-chan");
  } else {
    document.getElementById("navydevy").classList.remove("active-chan");
  }
};


const Header = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = items.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };


  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(
        "http://localhost:80/seenima-project%20-%20Copy/php-auth-api/working_classes/getMovies.php"
      )
      .then((res) => {
        setItems(res.data.body);
      
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <>
      <Navbar expand="lg" className="nav-bar" id="navydevy" fixed="top">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={images.logo1} alt="" height="100px" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="bg-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 gap-5 p-3 navbar"
              style={{ marginLeft: "3rem", maxHeight: "50px" }}
              navbarScroll
            >
            
              <ul className="navbar">
                <li><NavLink ClassName="active nav-link nav-link-ltr nav-link-ltr-active" to='/' >Cinema</NavLink></li>
                <li><NavLink ClassName="nav-link nav-link-ltr nav-link-ltr-active" to='/showing'>Showing</NavLink></li>
                <li><NavLink ClassName="active nav-link nav-link-ltr nav-link-ltr-active" to='/promo'>Promos</NavLink></li>
                <li><NavLink ClassName="active nav-link nav-link-ltr nav-link-ltr-active" to='/about'>About Us</NavLink></li>
           
            </ul> 
            </Nav>
           
            
            <form action="">
              <div className="search__container">
                <input
                  className="search__input"
                  type="text"
                  placeholder="Search"
                  value={wordEntered}
                  onChange={handleFilter}
                />
                <AiOutlineSearch className="glass-icon" />
              </div>
              {filteredData.length !== 0 && (
                <div className="dataResult">
                  {filteredData.slice(0, 15).map((value) => {
                    return (
                      <Link className="dataItem" onClick={clearInput} key={value.id} to={"/reserve/" + value.id}>
                        <p>{value.title}</p>
                      </Link>
                    );
                  })}
                </div>
              )}
            </form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
