import items from "../components/comingsoon-movies/movies"
import { useEffect, useState } from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
function App() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(items);
    setCollection([...new Set(items.map((item) => item.category))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = items.filter((item) => item.category == itemData);
    setData(filterData);
  };

  return (
    <div className="App">
      <Header />
      <div className="GallaryWrapper">
        <div className="filterItem">
          <ul>
            <li>
              <button onClick={() => setData(items)}>All</button>
            </li>
            {collection.map((item) => (
              <li>
                <button
                  onClick={() => {
                    gallery_filter(item);
                  }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="now-showings">
          <div className="swiper-coming row flex-wrap gap-3 mb-5 justify-content-center">
            {data.map((item) => (
              <div className="card col-md-2">
                <div className="card-tops">
                  <img className="lay" src={item.img} />
                  <Link id="more-info-buttonss" to={"/cinema/moviedetails/" + item.id}>
                    Details
                  </Link>
                </div>
                <div className="card-bottoms">
                  <h1>{item.title}</h1>
                  <span className="category">{item.genre}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
