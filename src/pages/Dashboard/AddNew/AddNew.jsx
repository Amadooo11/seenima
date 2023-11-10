import React from "react";
import "./AddNew.css";

import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { images } from "../../../management";
const Promos = () => {
  return (
    <div className="page-dashboard">
      <header>
        <Link to="/admin">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
      </header>
      <main>
        <Sidebar />
        <div className="cont">
          <div>
            <div className="movies container">
              {/*Adding Movie Form*/}
              <div className="heading">
                <h4 className="text-white text-center mt-2 py-2">
                  ADD A NEW MOVIE
                </h4>
              </div>

              <Form noValidate className="mt-5">
                <div>
                  <div>
                    <div className="row justify-content-around">
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Movie Title</Form.Label>
                        <Form.Control
                          type="text"
                          name="username"
                          placeholder="Movie "
                          autoFocus
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Upload Movie Poster</Form.Label>
                        <Form.Control type="file" />
                        <Form.Control.Feedback type="invalid">
                          Please upload a valid file.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="row justify-content-around">
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Movie Description</Form.Label>
                        <Form.Control as="textarea" rows={4} />
                      </Form.Group>
                      <Form.Group
                        className="col-4 mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Upload Movie Cover Photo</Form.Label>
                        <Form.Control type="file" />
                        <Form.Control.Feedback type="invalid">
                          Please upload a valid file.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                  </div>

                  <div>
                    <div className="row justify-content-around">
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Movie Duration</Form.Label>
                        <Form.Control
                          type="number"
                          name="duration"
                          placeholder="Duration"
                          autoFocus
                          required
                        />
                        <Form.Control.Feedback type="invalid">
                          Please choose a username.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Upload Movie Trailer</Form.Label>
                        <Form.Control type="file" />
                        <Form.Control.Feedback type="invalid">
                          Please upload a valid file.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </div>
                    <div className="row justify-content-around">
                      <Form.Group
                        className="col-4 mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Movie Featured Status</Form.Label>
                        <Form.Select
                          aria-label="Default select example"
                          name="Status"
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option>Featured</option>
                          <option>Regular</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          Please Choose a Movie Featured Status.
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 col-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Movie Type</Form.Label>
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
                    </div>
                    <div className="row justify-content-around">
                      <Form.Group
                        className="mb-3 col-4"
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
                      <Form.Group className="col-4 mt-4 pt-2">
                        <Form.Control
                          type="submit"
                          className="Add-new-button"
                          value="Add a new movie"
                          name="phone"
                          maxLength="10"
                          autoFocus
                          required
                        />
                      </Form.Group>
                    </div>
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

export default Promos;
