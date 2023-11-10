import React, { useState } from "react";
import "./Bookingsection.css";
import { useParams } from "react-router-dom";
import clsx from "clsx";
import movies from "../../pages/movies";
import seats from "./seats";
import PopUpForm from "./ModalForm";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const schedules = [
  {
    id: 1,
    name: "Avatar: The Way of Water",
    date: "12-11-2022",
    cinema: "CINEMA A",
    time: "12:00 PM",
    seats: 30,
  },
  {
    id: 2,
    name: "Avatar: The Way of Water",
    date: "12-11-2022",
    cinema: "CINEMA B",
    time: "2:15 PM",
    seats: 20,
  },
  {
    id: 3,
    name: "Avatar: The Way of Water",
    date: "12-11-2022",
    cinema: "CINEMA C",
    time: "4:30 PM",
    seats: 47,
  },
];

const Bookingsection = () => {
  const { id } = useParams();

  const getMovie = movies[id - 1];

  const [index, setIndex] = useState();
  const getDetails = schedules[index - 1];

  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatNumber, setSeatNumber] = useState([]);
  const [movietime, setMovieTime] = useState("");
  const [movieDate, setMovieDate] = useState("");
  const [movieCinema, setMovieCinema] = useState("");

  const [isSch, setIsSch] = useState(false);
  const [isSeat, setIsSeat] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let price = selectedSeats.length * selectedMovie.price;

  const timeHandle = (time) => {
    setMovieTime(time);
  };

  const dateHandle = (date) => {
    setMovieDate(date);
  };

  const cinemaHandle = (ciname) => {
    setMovieCinema(ciname);
  };

  const indexHandle = (id) => {
    setIndex(id);
    setIsSch(true);
  };

  return (
    <div className="booking-section">
      <PopUpForm
        showit={handleShow}
        hideit={handleClose}
        showing={show}
        price={price}
        time={movietime}
        date={movieDate}
        room={movieCinema}
      />
      <div className="wrapper row">
        <div className="col-sm-4 col1">
          <div className="col-name">
            <h4 className="text-center mb-1">Select a Schedule</h4>
          </div>

          <div className="col-value">
            {schedules.map((item) => {
              return (
                <div
                  onClick={() => {
                    indexHandle(item.id);
                    timeHandle(item.time);
                    dateHandle(item.date);
                    cinemaHandle(item.cinema);
                  }}
                  className="d-flex px-4 py-2 timing mb-1 justify-content-between"
                >
                  <div>
                    <p style={{ color: "rgb(0, 195, 255)" }}>
                      {getMovie.title}
                    </p>
                    <p className="text-white">{item.date}</p>

                    <p style={{ color: "lime" }}>Available</p>
                  </div>
                  <div className="align-self-center">
                    <p className="text-white">{item.cinema}</p>
                    <p className="text-white mx-6">{item.time}</p>
                  </div>
                  <div className="align-self-end"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-sm-5 col2 text-white">
          <div className="col-name">
            <h4 className="text-center mb-1">Select a Seat</h4>
          </div>
          <div className="App-Movie">
            <ShowCase />
            {isSch && (
              <Cinema
                movie={selectedMovie}
                selectedSeats={selectedSeats}
                onSelectedSeatsChange={(selectedSeats) => {
                  setSelectedSeats(selectedSeats);
                  setIsSeat(true);
                }}
                seatNumber={seatNumber}
                onSeatNumberChange={(seatNumber) => setSeatNumber(seatNumber)}
                onUnselectSeat={() => {
                  setIsSeat(false);
                  
                }}
              />
            )}

            <p className="info">
              You have selected{" "}
              <span className="count">{selectedSeats.length}</span> seat/s for
              the price of <span className="total">PHP {price}</span>
            </p>

            <div className="screen"></div>
          </div>
        </div>
        <div className="col3 col-sm-3">
          <div className="col-name">
            <h4 className="text-center mb-0">Payment Details</h4>
          </div>
          <div className="col-value p-4">
            <h3 style={{ color: "rgb(0, 195, 255)" }}>{getMovie.title}</h3>
            <div>
              <p className="m-0" style={{ color: "rgb(0, 195, 255)" }}>
                Date Of Showing
              </p>
              <p className="text-white" style={{ fontSize: 14 }}>
                {index ? getDetails.date : "Please select a schedule"}
              </p>
            </div>

            <div>
              <p className="m-0" style={{ color: "rgb(0, 195, 255)" }}>
                Time Of Showing
              </p>
              <p className="text-white" style={{ fontSize: 14 }}>
                {index ? getDetails.time : "Please select a schedule"}
              </p>
            </div>

            <div>
              <p className="m-0" style={{ color: "rgb(0, 195, 255)" }}>
                Cinema Room
              </p>
              <p className="text-white" style={{ fontSize: 14 }}>
                {index ? getDetails.cinema : "Please select a schedule"}
              </p>
            </div>

            <div>
              <p className="m-0" style={{ color: "rgb(0, 195, 255)" }}>
                Selected Seat
              </p>
              <p className="text-white" style={{ fontSize: 15 }}>
                {seatNumber ? seatNumber : "Please choose a seat"}
              </p>
            </div>

            <div>
              <p className="m-0" style={{ color: "rgb(0, 195, 255)" }}>
                Ticket Price
              </p>
              <p className="text-white" style={{ fontSize: 14 }}>
                {" "}
                1 seat = PHP 300
              </p>
            </div>

            <OverlayTrigger
              key={Math.random()}
              placement="top"
              overlay={
                !isSch || !isSeat ? (
                  <Tooltip>
                    Please Select your schedule and seat before paying
                  </Tooltip>
                ) : (
                  <Tooltip>You are good to go now</Tooltip>
                )
              }
            >
              <button
                onClick={isSch || isSeat ? handleShow : ""}
                className={!isSch || !isSeat ? "disabled-button" : ""}
              >
                PAY ₱{price}.00
              </button>
            </OverlayTrigger>
          </div>
        </div>
      </div>
    </div>
  );
};

function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small className="pb-3">Available</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  );
}

function Cinema({
  movie,
  selectedSeats,
  onSelectedSeatsChange,
  onSeatNumberChange,
  seatNumber,
  onUnselectSeat,
}) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
      onUnselectSeat();
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  }

  function handleSeatNumber(seatNum, seat) {
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      seatNumber.filter((num) => num !== seatNum);
      seatNumber.pop();
    } else {
      if (seatNumber.includes(seatNum)) {
        return;
      } else {
        onSeatNumberChange([...seatNumber, seatNum]);
      }
    }
  }

  return (
    <div className="Cinema mt-4">
      <div className="seats">
        {seats.map((seat, index) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = seat.occupied === true;

          return (
            <span
              tabIndex={index}
              key={index}
              style={{ fontSize: 20, color: "#eee" }}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={
                isOccupied
                  ? null
                  : () => {
                      handleSelectedState(seat);
                      handleSeatNumber(seat.seat, seat);
                    }
              }
              onKeyPress={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            >
              {seat.seat}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Bookingsection;
