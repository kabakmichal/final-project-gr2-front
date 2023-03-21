import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import styles from "./DateTimePicker.module.css";
import Calendar from "./calendar.svg";
import React from "react";

const DateTimePicker = (props) => {
  const { selectedDate, onDateChange } = props;

  const currentTodo = JSON.parse(localStorage.getItem("currentToDo"));

  return (
    <div className={styles.date}>
      <Flatpickr
        options={{
          dateFormat: "Y-m-d H:i:i",
          height: "14px",
          enableTime: true,
          time_24hr: true,
          // defaultDate: ["2016-10-10", "2016-10-20"],
          // defaultDate: currentTodo.date,
          minTime:
            new Date().getDate() === new Date(selectedDate).getDate()
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
        value={selectedDate}
        onChange={onDateChange}
        date={props.date}
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
