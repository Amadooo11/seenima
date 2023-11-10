import "./index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilm } from "@fortawesome/free-solid-svg-icons"
import { faClipboard } from "@fortawesome/free-regular-svg-icons"

function ShowingsBookings() {
  return (
    <section className="showings-bookings">
      <article className="showings">
        <div className="icon">
          <FontAwesomeIcon icon={faFilm} />
        </div>
        <div className="info">
          <p>3</p>
          <p>Movies</p>
          <p>Showing Today</p>
        </div>
      </article>
      <div className="dividing-line"></div>
      <article className="bookings">
        <div className="icon">
          <FontAwesomeIcon icon={faClipboard} />
        </div>
        <div className="info">
          <p>3</p>
          <p>Bookings</p>
          <p>Made Today</p>
        </div>
      </article>
    </section>
  )
}

export default ShowingsBookings
