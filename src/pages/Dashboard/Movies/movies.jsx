import React from "react"
import "./movies.css"
import Clock from "../Clock"
import { Link } from "react-router-dom"
import Sidebar from "../Sidebar"
import { images } from "../../../management"
const Movies = () => {
  return (
    <div className="page-dashboard">
    <header>
    <Link to="/admin">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
   </header>
   <main>
     <Sidebar />
     <Clock />
   
   </main>
 </div>
    

  )
}

export default Movies
