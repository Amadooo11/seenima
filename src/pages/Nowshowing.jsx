import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:80/seenima-project%20-%20Copy/php-auth-api/working_classes/getMovies.php"
      )
      .then((res) => {
        setMovies(res.data.body);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setData(movies);
    setCollection([...new Set(movies.map((item) => item.category))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = movies.filter((item) => item.category == itemData);
    setData(filterData);
  };

  return (
    <div className="App">
      <Header />
      <div className="GallaryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(movies)}>All</button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                  className={data.category == item ? "button-active" : ""}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="now-showings">
          <div className="swiper-coming row flex-wrap gap-3 mb-5 justify-content-center">
            {data.map((item) => {
              return (
                <div className="card col-md-2">
                  <div className="card-tops">
                    <img className="lay" src={item.img} />
                    <Link id="more-info-buttons" to={"/reserve/" + item.id}>
                      Reserve
                    </Link>
                    <Link
                      id="more-info-buttonss"
                      to={"/nowshowingdetails/" + item.id}
                    >
                      Details
                    </Link>
                  </div>
                  <div className="card-bottoms">
                    <h1>{item.title}</h1>
                    <span className="category">{item.genre}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
