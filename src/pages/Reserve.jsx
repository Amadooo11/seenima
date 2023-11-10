import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Bookingsection from '../components/booking/Bookingsection';
import { useParams } from 'react-router-dom';
import movies from "./movies";
import "./styles.css";

const Reserve = () => {
  const { id } = useParams();

  const getMovie = movies[id - 1];

  console.log(getMovie);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  



  return (
    <div>
      <Header />
      <div className='movie-header' style={{ margin: 0, height: "70vh" }}>
        <img src={getMovie.bgimg} className="overlay" alt="" />
        <div className='wrapper container d-flex gap-3 align-items-end h-100 pb-5'>
          <div>
            <img src={getMovie.img} alt="" height="300" />
          </div>
          <div className="movie-info">
            <h3 className="m-0">{getMovie.title}</h3>
            <p className="mb-4 w-50">{getMovie.content}</p> 
            <h5 className="m-0">DURATION</h5>
            <p className="mb-4">{getMovie.duration} mins</p>
            <h5 className="m-0">Genre</h5>
            <p className="mb-4">{getMovie.genre}</p>
          </div>
        </div>
      </div>
      <Bookingsection />
      <Footer />
    </div>
  )
}

export default Reserve;
