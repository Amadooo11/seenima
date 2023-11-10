import "./App.css";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Reserve from "./pages/Reserve";
import Notfound from "./pages/Notfound";
import Trailer from "./pages/Trailer";
import Trailer1 from "./pages/Trailer1";
import Showing from "./pages/Showing";
import Promo from "./pages/Promo";
import AuthProvider from "./auth/UserContext";
import AdminLogin from "./pages/AdminLogin/index"
import AboutUs from "./pages/AboutUs";
import { RequiredAuth } from "./auth/RequiredAuth";
import NowShowing from "./pages/Nowshowing";
import ComingSoon from "./pages/Comingsoon";
import Dashboard from "./pages/Dashboard";
import Addnew from "./pages/Dashboard/AddNew/AddNew";
import Genre from "./pages/Dashboard/Genre/Genre";
import Promos from "./pages/Dashboard/Promos/Promos";
import Movies from "./pages/Dashboard/Movies/movies";
import NewCast from "./pages/Dashboard/casts/NewCast";
import Schedule from "./pages/Dashboard/Schedule/Schedule";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/showing" element={<Showing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/promo" element={<Promo />} />
        <Route path="/reserve/:id" element={<Reserve />} />
        <Route path="/cinema/moviedetails/:id" element={<Trailer />} />
        <Route path="/nowshowingdetails/:id" element={<Trailer1 />} />
        <Route path="/movies/nowshowing" element={<NowShowing />} />
        <Route path="/movies/comingsoon" element={<ComingSoon />} />
        <Route path="*" element={<Notfound />} />
          <Route path="/promos" element={ <RequiredAuth><Promos /></RequiredAuth>} />
          <Route path="/addnew" element={<RequiredAuth><Addnew /></RequiredAuth>} />
          <Route path="/addcast" element={<RequiredAuth><NewCast /></RequiredAuth>} />
          <Route path="/addgenre" element={<RequiredAuth><Genre /></RequiredAuth>} />
          <Route path="/addsched" element={<RequiredAuth><Schedule /></RequiredAuth>} />
          <Route path="/movies" element={<RequiredAuth><Movies /></RequiredAuth>} />
          <Route path="/dashboard" element={<RequiredAuth><Dashboard /></RequiredAuth>} />
        
      </Routes>
    </AuthProvider>
  );
}

export default App;
