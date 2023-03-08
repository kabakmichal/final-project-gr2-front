import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import styles from "./DateTimePicker.module.css";
import Calendar from "./calendar.svg";
import React, { useState } from "react";

const DateTimePicker = ({ deadline }, { onChange }, props) => {
  // const [date, setDate] = useState();

  // const handleDateChange = (selectedDates, dateStr) => {
  //   props.onDateChange(dateStr);
  // };

  // const formatDate = (date, dateStr) => {
  //   console.log(dateStr);
  // };

  // const handle = () => {
  //   handleDateChange();
  //   formatDate();
  // };

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
        // onChange={handle}
        onChange={(date, dateStr) => {
          console.log(dateStr);
        }}
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
