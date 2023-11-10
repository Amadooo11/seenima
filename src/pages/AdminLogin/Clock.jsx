import "./index.css"
import getDayNameOfWeek from "../../utils/getDayNameOfWeek"
import { useEffect, useState } from "react"

function Clock() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const day = getDayNameOfWeek(currentDate.getDay())

  const minutes =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : `${currentDate.getMinutes()}`

  const hour =
    currentDate.getHours() > 12
      ? currentDate.getHours() - 12
      : currentDate.getHours()

  const ampm = currentDate.getHours() > 11 ? "PM" : "AM"

  const date =
    currentDate.getDate() < 10
      ? `0${currentDate.getDate()}`
      : `${currentDate.getDate()}`

  const month =
    currentDate.getMonth() + 1 < 10
      ? `0${currentDate.getMonth() + 1}`
      : `${currentDate.getMonth() + 1}`

  const year = currentDate.getFullYear()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, 1000 * 20) // refresh current date and time every 20 seconds

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="clock">
      <div className="time">
        {hour}:{minutes} {ampm}
      </div>
      <div className="date">
        {day} | {month} - {date} - {year}
      </div>
    </div>
  )
}

export default Clock
