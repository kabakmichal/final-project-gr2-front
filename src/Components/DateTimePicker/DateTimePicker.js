import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import PropTypes from 'prop-types'
import styles from './DateTimePicker.module.css';
import Calendar from "./calendar.svg";

function DateTimePicker({ deadline, handleDateChange }) {
    
    return (
        <div className={styles.date}>
        <Flatpickr
            
            options={{
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
            onChange={date => {
            handleDateChange(new Date(date))
            }}
        >
            <input type="text" placeholder="Select Date..." data-input />
            <button data-toggle>
            <img className={styles.calendar} src={Calendar}></img>
            </button>
        </Flatpickr>
        </div>
    )
}

export default DateTimePicker;