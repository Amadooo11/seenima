import React from "react";
import "./ComingSoon.css";
import {Link} from "react-router-dom";
import items from "../comingsoon-movies/movies"
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay  } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
const ComingSoon = (props) => {
  return (
    <div className="coming-soon">
      <div className="d-flex px-5 py-4 justify-content-between">
        <h3 style={{color: "aqua"}}>Coming Soon</h3>
      
        <Link className="" to="/movies/comingsoon">
          
          <div>Movies   <FontAwesomeIcon icon={faArrowRight} /></div>
       
          </Link>
      </div>
      <div className="swiperssss">
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
          className="mySwiperss"
        >
          {items.map(item => {
            return (
              <SwiperSlide>
                <Link id="" to={"/more-info/" + item.id}> 
                  <img src={item.img} alt="" />
                </Link>
                <div className="infoss">
                  <h4>{item.title}</h4>
                  <p className="m-0">{item.genre}</p>
                 
                </div>
              </SwiperSlide>
            )

          })}

        </Swiper>
      </div>
    </div>
  );
};


export default ComingSoon;
