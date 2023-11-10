import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faFilm,
  faStar,
  faRightFromBracket,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../auth/UserContext";

const Sidebar = () => {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/admin");
  };

  const dropdownHandler = () => {
    document.getElementById("dropdown").classList.toggle("active-dropdown")
  }

  return (
    <nav className="sidebar">
      <section>
        <h2>General</h2>
        <NavLink to="/dashboard">
          <div className="icon">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div>Dashboard</div>
        </NavLink>
      </section>
      <section>
        <h2>Cinema</h2>
        <div className="icon" >
          </div>
          <NavLink to="/promos">
          <FontAwesomeIcon icon={faStar}  />
          <div>Promos</div>
        </NavLink>
        <NavLink to="" >
          <div className="icon">
            <FontAwesomeIcon icon={faFilm} />
          </div>
          <div>Movies</div>
            <FontAwesomeIcon icon={faArrowDown} onClick={dropdownHandler} style={{marginLeft: 50}} />
        </NavLink>
        <div className="sub-menu" id="dropdown">
          <NavLink to="/addnew" >Add new Movie</NavLink>
          <NavLink to="/addgenre" >Add Genre</NavLink>
          <NavLink to="/addcast" >Add Cast</NavLink>
          <NavLink to="/addsched" >Add Schedule</NavLink>
 
        </div>
       
         
      </section>
      <section>
        <h2>Account</h2>
        <button type="button">
          <div className="icon">
            <FontAwesomeIcon icon={faRightFromBracket} />
          </div>
          <div onClick={logoutHandler}>Logout</div>
        </button>
      </section>
    </nav>
  );
};

export default Sidebar;
