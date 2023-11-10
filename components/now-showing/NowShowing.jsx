import React, { useState, useEffect } from "react";
import "./NowShowing.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const NowShowing = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:80/seenima-project%20-%20Copy/php-auth-api/working_classes/getMovies.php"
      )
      .then((res) => {
        setItems(res.data.body);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="now-showing">
      <div className="d-flex px-5 py-3 justify-content-between">
        <h3 style={{ color: "aqua" }}>Now showing</h3>
        
        <Link className="" to="/movies/nowshowing">
          
        <div>Movies   <FontAwesomeIcon icon={faArrowRight} /></div>
     
        </Link>
      </div>
      <div className="swiper">
        <Swiper
          slidesPerView={props.slidesPerView}
          spaceBetween={15}
          autoplay={{
            delay: 2500,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {items.map((item) => {
            return (
              <SwiperSlide>
                <Link to={"/reserve/" + item.id}>
                  <img src={item.img} alt="" />
                </Link>
                <div className="info">
                  <h4>{item.title}</h4>
                  <p className="m-0">Date: {item.Date}</p>
                  <p className="m-0">Available slots: {item.slots}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NowShowing;
