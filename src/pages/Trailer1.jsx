import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import { useParams } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

import "./styles.css";

const path = "/videos/";

const Trailer1 = () => {
  const [movies, setMovies] = useState([]);

  const params = useParams();

  useEffect(() => {
    axios
      .get(
        `http://localhost:80/seenima-project%20-%20Copy/php-auth-api/working_classes/getOneMovie.php?id=${params.id}`
      )
      .then((res) => {
        setMovies(res.data);

      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const playButton = document.getElementById("play-button");
    let video = document.querySelector(".video-container");
    let closebtn = document.getElementById("close-icon");
    let trailervideo = document.getElementById("overlay-video");

    playButton.onclick = () => {
      video.classList.add("show-video");
      trailervideo.play();
    };

    closebtn.onclick = () => {
      video.classList.remove("show-video");
      trailervideo.pause();
      playButton.classList.remove("paused");
    };

    playButton.addEventListener("click", () => {
      playButton.classList.add("paused");
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="movie-header" style={{ margin: 0, height: "70vh" }}>
        <img src={movies.bgimg} className="overlay" alt="" />
        <div className="video-container">
          <AiOutlineClose id="close-icon" />
          <video id="overlay-video" height="700" width="1200" controls>
            <source src={path + movies.video} />
          </video>
        </div>
        <div className="wrapper container d-flex gap-3 align-items-end h-100 pb-5">
          <div className="Trailer-info mb-5">
            <h3 className="mb-0">{movies.title}</h3>

            <p className="text-white mt-3">{movies.genre}</p>
            <button id="play-button" class="button-play"></button>
            <span className="mb-2 mx-4">Watch the Trailer</span>
          </div>
        </div>
      </div>

      <div className="detail-section container mt-5">
        <div>
          <h3 className="text-white">Description </h3>
          <p className="w-75 text-white">{movies.content}</p>
        </div>
        {/* <div className="mt-5">
          <h3 className="text-white">Casts </h3>
          <div className="cast-info">
            <div>
              <div className="d-flex gap-3">
                {getNowShowingMovies.casts.map((person) => {
                  return (
                    <div>
                      <img src={person.image} alt="person" height="200" />
                      <p className="text-white">{person.name}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Trailer1;
