import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Link } from "react-router-dom";
import "./styles.css";

const schedules = [
  
];

const nowShowing = [
  {
    id: 1,
    title: "AVATAR: The Way of Water",
    img: "https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    time: "9:00 A.M.",
    cinema: "Cinema A",
  },
  {
    id: 2,
    title: "Thor love and thunder",
    img: "https://lumiere-a.akamaihd.net/v1/images/p_thorloveandthunder_639_593cb642.jpeg",
    time: "9:00 A.M.",
    cinema: "Cinema B",
  },
  {
    id: 4,
    title: "Spider-Man No Way Home",
    time: "9:00 A.M.",
    cinema: "Cinema C",
    img: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/spidermannowayhome_onesheet_rating.jpg?itok=tjZOthvB",
  },
];

const upNext = [
  {
    id: 6,
    title: "One Piece Film: Red",
    time: "11:30 A.M.",
    cinema: "Cinema A",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwBT7XzacboMfZC6b89A5J6Mx0tyGv9kV0cIUzp-YzGpfRlMWk",
  },
  {
    id: 7,
    title: "The INVITATION",
    time: "11:30 A.M.",
    cinema: "Cinema B",
    img: "https://dx35vtwkllhj9.cloudfront.net/sonypictures/the-invitation/images/regions/us/onesheet.jpg",
  },
  {
    id: 8,
    title: "Expensive Candy",

    time: "11:30 A.M.",
    cinema: "Cinema C",
    img: "https://m.media-amazon.com/images/M/MV5BM2VkNDU1NDAtOTE1MC00MTgzLWJhMGQtZWZiOTE3MjQ1YjcwXkEyXkFqcGdeQXVyMTMzODk3NDU0._V1_.jpg",
  },
  {
    id: 9,
    title: "Black Adam",
    time: "2:00 A.M.",
    cinema: "Cinema B",   
    img: "https://m.media-amazon.com/images/M/MV5BNmEwODNmOTYtMWRmYS00ZTEzLWJmNTAtMWQ4OWVlMzU0MWIyXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
  },
];

const Showing = () => {
  return (
    <div>
      <div>
        <Header />
        <div className="showing">
          <div className="col1">
            <div className="time-date">
              <h1>9:00 A.M.</h1>
              <p>Thursday | 09-22-2022</p>
            </div>
            <div className="next-movie">
              <div className="col1">
                <div className="col-name">
                  <h4 className="text-center my-4  mb-1">Next Movie</h4>
                </div>
                <div className="col-value">
                  {schedules.map((item) => {
                    return (
                      <div className="d-flex px-4 py-2 timing mb-1 justify-content-between">
                        <div>
                          <p style={{ color: "rgb(0, 195, 255)" }}>
                            {item.name}
                          </p>
                          <p className="text-white">{item.date}</p>
                          <p style={{ color: "lime" }}>Available</p>
                        </div>
                        <div className="align-self-center">
                          <p className="text-white">{item.cinema}</p>
                        </div>
                        <div className="align-self-end">
                          <p className="text-white mx-4">{item.time}</p>
                          <p style={{ color: "lime" }}>
                            {item.seats} seats are left
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="movies-section">
            <div className="col container">
              <div className="new-showing mt-4">
                <h3>Now showing</h3>
                <div className="movies d-flex my-3 mb-4">
                  {nowShowing.map((item) => {
                    return (
                      <div className="movie  mx-4">
                        <Link to={"/reserve/" + item.id}>
                          <div className="img-container">
                            <img src={item.img} alt="" height="200" />
                          </div>
                        </Link>
                        <div className="info">
                          <h4>{item.title}</h4>
                          <p className="m-0">Time: {item.time}</p>
                          <p className="m-0">Cinema Room: {item.cinema}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="up-next">
                <h3>Upcoming Movie</h3>
                <div className="movies d-flex">
                  {upNext.map((item) => {
                    return (
                      <div className="next my-3 mx-4">
                        <Link to={"/reserve/" + item.id}>
                          <div className="img-container">
                            <img src={item.img} alt="" height="200" />
                          </div>
                        </Link>
                        <div className="info">
                          <h4>{item.title}</h4>
                          <p className="m-0">Time: {item.time}</p>
                          <p className="m-0">Cinema Room: {item.cinema}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </div>
  );
};

export default Showing;
