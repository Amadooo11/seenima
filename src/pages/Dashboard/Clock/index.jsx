import "./index.css"
import getDayNameOfWeek from "./getDayNameOfWeek"
import { useEffect, useState } from "react"

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date())

  var minutes = currentDate.getMinutes()
  var hour = currentDate.getHours()

  const day = getDayNameOfWeek(currentDate.getDay())
  const date = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  function formatAMPM(date) {
    var ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hour + ':' + minutes + ' ' + ampm;
    return strTime;
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000 * 20) // refresh current date and time every 60 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <section className="clock">
      <div>
        {formatAMPM(new Date)}
      </div>
      <div>
        {day} | {month < 10 ? `0${month}` : month} -{" "}
        {date < 10 ? `0${date}` + " -"  : date} {year}
      </div>
    </section>
  )
}

export default Clock
