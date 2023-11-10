import "./index.css"
import posterOrphan from "./imgs/poster-orphan.jpg"
import posterBulletTrain from "./imgs/poster-bullet-train.jpg"
import posterSpiderman from "./imgs/poster-spiderman.jpg"
import { images } from "../../management"
import Clock from "./Clock";
import React, {useState, useContext} from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../auth/UserContext"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock } from "@fortawesome/free-regular-svg-icons"

export default function AdminLogin() {


  const { loginUser, wait, loggedInCheck } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChangeInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    }); 
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!Object.values(formData).every((val) => val.trim() !== "")) {
      setErrMsg("Please Fill in all Required Fields!");
      return;
    }

    const data = await loginUser(formData);
    if (data.success) {
      e.target.reset();
      setRedirect("Redirecting...");
      await loggedInCheck();
      navigate("/dashboard", { replace: true });
      return;
    }
    setErrMsg(data.message);
    document.getElementById("admin-form").reset();
  };

  const ClearForm = (e) => {
    e.preventDefault();
    document.getElementById("admin-form").reset();
  };


  return (
    <div className="page-admin-login">
      <div className="col-left">
        <form onSubmit={submitForm} id="admin-form">
          <Clock /> 
          <div className="logo">
            <p>Seenima Admin</p>
            <img src={images.logo1} alt="SeeNima website logo" />
          </div>
          <div className="inputs">
            <p>Login</p>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="email"
                id="username"
                onChange={onChangeInput}
                placeholder="Email"
                autoComplete="off"
                required
              />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                onChange={onChangeInput}
                placeholder="Password"
                autocomplete="off"
                id="password"
                required
              />
          </div>
         
          {errMsg && (
                <div className="text-danger text-center">{errMsg}</div>
              )}
              {redirect ? (
                redirect
              ) : (
                <div className="actions">
                  <button type="submit" disabled={wait}>
                    Login
                  </button>

                  <button onClick={ClearForm}>
                    Clear
                  </button>
                </div>
              )}{" "}
        
        </form>
      </div>
      <div className="col-right">
        <div className="movies-showing-now">
          <div className="title">Now Showing</div>
          <div className="cards">
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterOrphan} alt="" />
                <p>Movie title</p>
                <p>Duration: 1h 39min</p>
                <p>Cinema room: Cinema A</p>
              </div>
              <div className="movie-time">
                <div className="p-1 bg-white text-dark">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>12:00PM | 3:00PM</div>
              </div>
            </div>
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterBulletTrain} alt="" />
                <p>Movie title</p>
                <p>Duration: 2h 6min</p>
                <p>Cinema room: Cinema B</p>
              </div>
              <div className="movie-time">
                <div className="p-1 bg-white text-dark">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>12:00PM | 3:00PM</div>
              </div>
            </div>
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterSpiderman} alt="" />
                <p>Movie title</p>
                <p>Duration: 2h 28min</p>
                <p>Cinema room: Cinema C</p>
              </div>
              <div className="movie-time">
                <div className="p-1 bg-white text-dark">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div>12:00PM | 3:00PM</div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-three-movies">
          <div className="title">Top 3 Movies</div>
          <div className="cards">
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterOrphan} alt="" />
                <p>Movie title</p>
              </div>
            </div>
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterBulletTrain} alt="" />
                <p>Movie title</p>
              </div>
            </div>
            <div className="movie-entry">
              <div className="movie-card">
                <img src={posterSpiderman} alt="" />
                <p>Movie title</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
