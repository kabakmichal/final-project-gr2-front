import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import styles from "./DateTimePicker.module.css";
import Calendar from "./calendar.svg";
import React, { useRef, useState } from "react";

const DateTimePicker = ({ deadline, handleDateChange }, props) => {
  const [selectedDate, setSelectedDate] = useState("");

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
    // console.log(finalDate);
    props.onSelection(finalDate);
  };

  return (
    <div className={styles.date}>
      <Flatpickr
        options={{
          dateFormat: "Y-m-d",
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
