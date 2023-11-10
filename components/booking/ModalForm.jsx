import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PopUpForm({ hideit, showing, price, time, date, room }) {
  const [BookingDetails, setBookingDetails] = useState({
    username: "", //done
    email: "", //done
    phone: "", //done
    payment: "", //done
    amount: "", //done
    time: "", //done
    date: "", //done
    room: "", //done
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else{
      event.preventDefault();

      axios
        .post(
          "http://localhost:80/seenima-project%20-%20Copy/php-auth-api/BookedDetails/booking.php",
          BookingDetails
        )
        .then((res) => {
          console.log(res);
          toast.success("Successfully saved data in database", {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch((err) => {
          toast.error("oops something went wrong", {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
      

      setValidated(true);
    
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...BookingDetails,
      [name]: value,
      amount: price,
      time: time,
      date: date,
      room: room,
      
    });
  };

  return (
    <>
      <ToastContainer />
      <Modal show={showing} onHide={hideit} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>CONFIRM YOUR DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="row">
              <Form.Group
                className="mb-3 col-6"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={BookingDetails.username}
                  onChange={changeHandler}
                  placeholder="John doe"
                  autoFocus
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 col-6"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="baby@gmail.com"
                  name="email"
                  value={BookingDetails.email}
                  onChange={changeHandler}
                  autoFocus
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please use a valid Email.
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <div className="row">
              <Form.Group
                className="mb-3 col-6"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="8327498723"
                  name="phone"
                  maxLength="10"
                  value={BookingDetails.phone}
                  onChange={changeHandler}
                  autoFocus
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please use a valid Phone number.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="col-6 mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  name="payment"
                  value={BookingDetails.payment}
                  onChange={changeHandler}
                  required
                >
                  <option selected disabled value="">
                    Choose...
                  </option>
                  <option>credit card</option>
                  <option>debit</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Choose a payment method.
                </Form.Control.Feedback>
              </Form.Group>
            </div>

            {BookingDetails.payment === "credit card" ? (
              <div>
                <Modal.Header className="mb-3"></Modal.Header>
                <Modal.Title>PAYMENT DETAILS</Modal.Title>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Card Holder name</Form.Label>
                    <Form.Control
                       type="text"
                       name="name"
                       placeholder="John doe"
                       autoFocus
                       required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-6"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Card number</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="1234 1234 1234 1234"
                      maxLength="16"
                      autoFocus
                      required 
                    />
                  </Form.Group>
                </div>
                <div className="row">
                  <Form.Group
                    className="mb-3 col-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Exp Month</Form.Label>
                    <Form.Control type="text" placeholder="January"
                       autoFocus
                       required  />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-4"
                    controlId="exampleForm.ControlTextarea1"
                  
                  >
                    <Form.Label>Exp Year</Form.Label>
                    <Form.Control type="text" placeholder="2027" 
                      autoFocus
                      required />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col-4"
                    controlId="exampleForm.ControlTextarea1"
                  
                  >
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="password"
                      maxLength="3"
                      
                      placeholder="***"
                      autoFocus
                      required
                    />
                  </Form.Group>{" "}
                </div>{" "}
              </div>
            ) : null}

            <Modal.Footer>
              <Button variant="danger" onClick={hideit}>
                Cancel
              </Button>
              <Button variant="success" type="submit">
                Proceed
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default PopUpForm;
