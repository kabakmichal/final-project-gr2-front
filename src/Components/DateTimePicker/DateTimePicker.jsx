import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import styles from "./DateTimePicker.module.css";
import Calendar from "./calendar.svg";
// import { useState } from "react";
// const [date, setDate] = useState("");

function DateTimePicker({ deadline, handleDateChange }) {
  // const handleDateChange =
  return (
    <div className={styles.date}>
      <Flatpickr
        options={{
          height: "14px",
          enableTime: true,
          time_24hr: true,
          minTime:
            new Date().getDate() === new Date(deadline).getDate()
              ? new Date().setTime(new Date().getTime())
              : null,
          enable: [
            {
              from: new Date().setDate(new Date().getDate() - 1),
              to: new Date().setFullYear(new Date().getFullYear() + 10),
            },
          ],
          wrap: true,
        }}
        data-input
        data-enable-time
        value={deadline}
        // onChange={(date, dateStr) => {
        //   console.log(dateStr);
        // }}
      >
        <input type="text" placeholder="Select Date..." data-input />
        <button data-toggle>
          <img className={styles.calendar} src={Calendar}></img>
        </button>
      </Flatpickr>
    </div>
  );
}

export default DateTimePicker;
