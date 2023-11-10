import React from "react";
import "./Schedule.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { images } from "../../../management";

const casts = [
  {
    name: "Tom holland",
    image_url:
      "https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg",
    genre: "Fantasy",
  },
  {
    name: "Tom holland",
    image_url:
      "https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg",
    genre: "Fantasy",
  },
  {
    name: "Tom holland",
    image_url:
      "https://www.biography.com/.image/t_share/MTQ4MTUwOTQyMDE1OTU2Nzk4/tom-holland-photo-jason-kempin-getty-images-801510482-profile.jpg",
    genre: "Fantasy",
  },
];

const NewSchedule = () => {
  return (
    <div className="page-dashboard">
      <header>
        <Link to="/admin">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
      </header>
      <main>
        <Sidebar />
        <div className="sch-cont">
          <div>
            <div className="movies d-flex justify-content-center container">
              {/*Adding Movie Form*/}

              <Form noValidate className="mt-5 add-cast-container w-50">
                <h2 className="text-center text-white py-2 m-0">ADD A SCHEDULE</h2>
                <div className="col1">
                  <div className="">
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Movie Title</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="Status"
                        required
                      >
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option>Now Showing</option>
                        <option>Coming Soon</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please Choose a Movie Featured Status.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="Status"
                        required
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please Select a Date.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Start Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="Status"
                        required
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please Select a Time.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>End Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="Status"
                        required
                      ></Form.Control>
                      <Form.Control.Feedback type="invalid">
                        Please Select a Time.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Select a Room</Form.Label>
                      <Form.Select
                        aria-label="Default select example"
                        name="Status"
                        required
                      >
                        <option selected disabled value="">
                          Choose...
                        </option>
                        <option>Now Showing</option>
                        <option>Coming Soon</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">
                        Please Choose a Movie Featured Status.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group>
                       <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Price baby?"
                        autoFocus
                        required
                      />
                    </Form.Group>

                    <Form.Group className=" mt-4 pt-2">
                      <Form.Control
                        type="submit"
                        className="Add-new-button"
                        value="ADD NEW GENRE"
                        autoFocus
                        required
                      />
                    </Form.Group>
                    
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewSchedule;
