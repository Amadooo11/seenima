import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Link } from "react-router-dom";
import items from "../components/team/team";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Pop from "./Modal";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const About = (props) => {
  const form_contactUs = useRef();

  const submitEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mhf87tq",
        "template_vx8u0wi",
        form_contactUs.current,
        "1f_nuh9_f8pUgI0O3"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div>
      <Header />
      <div>
      
        <div className="rom-desc">
          <h4>CINEMA ROOMS</h4>
          <div className="rom-desc-header">
            <div className="captions">
              <h2>SEENIMA</h2>
              <p>The House of Entertainment</p>
              <p2>
                SeeNima is an Online Cinema Ticket Reservation and Management
                System. It is a mobile application and a web system that helps
                users to select their preferred date, time, and seating position
                for a specific available movie showing. There will be a
                management system to manage the movie showing, and monitor
                clients.
              </p2>
            </div>
          </div>
          <div
            className="card-section1"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <Card className="card1" style={{ width: "23rem" }}>
              <img
                variant="top"
                src="https://st.hzcdn.com/simgs/pictures/home-theaters/spivy-submit-custom-audio-video-img~ef312e2a0a3d1958_14-5477-1-900f38d.jpg"
              />
            </Card>
            <Card className="card1" style={{ width: "23rem" }}>
              <img
                variant="top"
                src="https://gallery.streamlinevrs.com/units-gallery/00/06/F8/thumbnail_158012191.jpeg"
              />
            </Card>
            <Card className="card1" style={{ width: "23rem" }}>
              <img
                variant="top"
                src="https://i.pinimg.com/564x/cb/54/d8/cb54d87914c94bf9c98a346ba6eac726.jpg"
              />
            </Card>
            <div class="page-contact-us">
              {/* main form */}
              <main>
                <form ref={form_contactUs} onSubmit={submitEmail} >
                  <p>Contact Us</p>
                  <div>
                    <label htmlFor="">Name</label>
                    <input
                      type="text"
                      name="name_contactUs"
                      id=""
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Email</label>
                    <input
                      type="email"
                      name="email_contactUs"
                      id=""
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Message</label>
                    <textarea
                      name="message_contactUs"
                      id=""
                      placeholder="Write your message ..."
                    ></textarea>
                  </div>
                  <button type="submit">Submit</button>
                </form>
              </main>
            </div>

            <div className="our-team">
              <div className="d-flex px-1 py-3 justify-content-between">
                <h3>THE TEAM</h3>
              </div>
              <div className="swiperss">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={20}
                  autoplay={{
                    delay: 2500,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Autoplay]}
                  className="mySwipersss"
                >
                  {items.map((item) => {
                    return (
                      <SwiperSlide>
                        <img src={item.img} alt="" />

                        <div className="infos">
                          <h4>{item.name}</h4>
                          <p className="m-0">Role: {item.role}</p>
                          <ul className="d-flex list-unstyled gap-4 ">
                            <li>
                              <a className="text-white" href="">
                                <BsFacebook />
                              </a>
                            </li>
                            <li>
                              <a className="text-white" href="">
                                <BsInstagram />
                              </a>
                            </li>
                            <li>
                              <a className="text-white" href="">
                                <BsTwitter />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
