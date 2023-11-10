import React, { useState } from "react";
import "./styles.css";
import { images } from "../management";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../auth/UserContext";
import NextMovie from "./Dashboard/NextMovie";
import LatestBooking from "./Dashboard/LatestBooking";
import Clock from "./Dashboard/Clock"
import NowShowing from "./Dashboard/NowShowing"
const AdminLogin = () => {
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
    <div>
    
        
        <div className="contain">
          <div id="container">
            <div className="form-container sign-in-container">
              <form onSubmit={submitForm} id="admin-form">
                <h4 style={{ fontSize: "20px" }} className="display-2">
                  SEENIMA ADMIN
                </h4>
                <h1 style={{ marginTop: "30px" }}>Log in</h1>
                <input
                  type="text"
                  name="email"
                  onChange={onChangeInput}
                  placeholder="Username"
                  autoComplete="off"
                  required
                />
                <input
                  type="password"
                  name="password"
                  onChange={onChangeInput}
                  placeholder="Password"
                  autocomplete="off"
                  required
                />
                {errMsg && (
                  <div className="text-danger text-center">{errMsg}</div>
                )}
                {redirect ? (
                  redirect
                ) : (
                  <div>
                    <button type="submit" disabled={wait}>
                      Login
                    </button>

                    <button className="btn" onClick={ClearForm}>
                      Clear
                    </button>
                  </div>
                )}{" "}
              </form>
            </div>
            <div className="overlay-container">
              <div className="overlay">
                <div className="overlay-panel overlay-right"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default AdminLogin;
