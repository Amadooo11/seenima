import "./index.css"

function NowShowing() {
  return (
    <section className="movies-showing-now">
      <header>Now Showing</header>
      <article className="entry">
        <div>Movie Name</div>
        <div>
          <div>MM - DD - YYYY</div>
          <div>CINEMA A</div>
          <div>11:00 AM</div>
        </div>
      </article>
    </section>
  )
}

export default NowShowing
