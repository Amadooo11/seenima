import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./Carous.css";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    img: "https://images4.alphacoders.com/761/76146.jpg",
    type: "Action/Adventure/Fantasy",
    title: "AVATAR: The Way of Water",
    content: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their planet.    "
  },
  {
    id: 5,
    img: "https://coolthemestores.com/wp-content/uploads/2022/01/spider-man-no-way-home-wallpaper-background.jpg",
    type: "Action, Adventure & Fantasy",
    title: "Spider-Man No Way Home",
    content: "Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe."
  },
  {
    id: 2,
    img: "https://i.ytimg.com/vi/pX2PO-LOXc0/maxresdefault.jpg",
    type: "Action-Adventure, Comedy, Fantasy, Romance & Superhero",
    title: "Thor love and thunder",
    content: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to ㅤㅤㅤㅤㅤfight Gorr the God Butcher, who intends to make the gods extinct."
  },
]

const Carous = () => {
  return (
    <div className="my_carousel_main">
        <Carousel fade>
          {items.map(item => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={item.img}
                  alt="First slide"
                />
                <Carousel.Caption className="captions1">
                  <h1 className="movie-title">{item.title}</h1>
                  <p style={{ color: "#02d3e6" }}>{item.type}</p>
                  <p className="w-50">{item.content}</p>
                  <div className="buttons">
                    <Link className="reserve" to={"/reserve/" + item.id}>Reserve</Link>
                    <a className="more-info" href={"/nowshowingdetails/"  + item.id}>More info</a>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
    </div>
  );
};

export default Carous;
