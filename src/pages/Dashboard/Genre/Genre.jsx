import React from "react";
import "./Genre.css";
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

const NewGenre = () => {
  return (
    <div className="page-dashboard">
      <header>
        <Link to="/admin">
          <img src={images.logo1} alt="SeeNima website logo" />
        </Link>
      </header>
      <main>
        <Sidebar />
        <div className="cast-cont">
          <div>
            <div className="movies d-flex container">
              {/*Adding Movie Form*/}

              <Form noValidate className="mt-5 add-cast-container w-50">
                <h2 className="text-center text-white py-2 m-0">ADD A CAST</h2>
                <div className="col1">
                  <div className="mt-4">
                    <Form.Group
                      className="mb-5"
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
                      <Form.Label>Select a Genre</Form.Label>
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
                        Please Select a Genre.
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Select a Genre</Form.Label>
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
                        Please upload a valid file.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Select a Genre</Form.Label>
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
                        Please upload a valid file.
                      </Form.Control.Feedback>
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
                    <Form.Group className=" mt-4 pt-2">
                      <Form.Control
                        type="submit"
                        className="Add-new-button-secondary"
                        value="ADD MORE GENRE"
                        autoFocus
                        required
                      />
                    </Form.Group>
                  </div>
                </div>
              </Form>
              <Form noValidate className="mt-5 add-cast-container w-50">
                <h2 className="text-center text-white py-2 m-0">ADD A CAST</h2>
                <div className="col1">
                  <div>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Movie Title</Form.Label>
                      <Form.Control
                        type="text"
                        name="selected-movie"
                        placeholder="your selected movie will be shown here"
                        required
                      ></Form.Control>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Movie Genre</Form.Label>
                     
                    </Form.Group>

                    <div className="genre-section d-flex flex-column gap-3">
                      {casts.map((cast) => {
                        return (
                          <div className="d-flex align-items-center a-genre">
                          
                            <p className="m-0 ms-4 text-white">{cast.genre}</p>
                          </div>
                        );
                      })}
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

export default NewGenre; 
