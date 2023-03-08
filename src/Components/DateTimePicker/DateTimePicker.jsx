import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import styles from "./DateTimePicker.module.css";
import Calendar from "./calendar.svg";
import React from "react";

const dateContext = React.createContext();

const DateTimePicker = ({ deadline }, props) => {
  const handleChange = (selectedDates) => {
    const selectedDate = selectedDates[0];

    const date = new Date(selectedDate);
    const formattedDate = date
      .toLocaleDateString("pl-PL", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, "-");

    const parts = formattedDate.split(".");
    const year = parts[2];
    const day = parts[0];

    parts[0] = year;
    parts[2] = day;

    const finalDate = parts.join("-");

    localStorage.setItem("date", finalDate);
  };

  return (
    <div className={styles.date}>
      <Flatpickr
        options={{
          dateFormat: "Y-m-d",
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
        onChange={handleChange}
      >
        <input type="text" placeholder="Select Date..." data-input />
        <button data-toggle>
          <img className={styles.calendar} src={Calendar}></img>
        </button>
      </Flatpickr>
    </div>
  );
};

export default DateTimePicker;
