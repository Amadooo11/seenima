import React from "react";
import "./styles.css";
import { images } from "../management"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div class="page-not-found">
      {/* Navbar */}
      <nav>
        <Link to="/">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
      </nav>

      {/* Navbar */}
      <main>
        <p>404</p>
        <p>Oops! Page not Found</p>
        <p>
          Sorry, the page you're looking for was moved, deleted, renamed or
          might have never existed.
        </p>
        <Link to="/">Return Home</Link>
      </main>
    </div>
  )
}

export default NotFound;
