import React from "react"
import Clock from "./Clock"
import ShowingsBookings from "./ShowingsBookings"
import NextMovie from "./NextMovie"
import LatestBooking from "./LatestBooking"

import NowShowing from "./NowShowing"
import Sidebar from "./Sidebar"
import { images } from "../../management"
import { Link } from "react-router-dom"
import "./index.css"

const Dashboard = () => {
  return (
    <div className="page-dashboard">
      <header>
        <Link to="/admin">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
      </header>
      <main>
        <Sidebar />
        <div className="content">
          <ShowingsBookings />
          <Clock />
          <NowShowing />
          <LatestBooking />
          <NextMovie />
        </div>
      </main>
    </div>
  )
}

export default Dashboard
