import Select from "react-select";
import React from "react";
import css from "./DifficultSelect.module.css";
import { ReactComponent as Arrow } from "./arrow.svg";

const DifficultOptions = [
  { value: "easy", label: "🟢 Easy" },
  { value: "normal", label: "🔵 Normal" },
  { value: "hard", label: "🔴 Hard" },
];

function DifficultSelect({ onChange }) {
  // function DifficultSelect(props) {
  const style = {
    control: (base) => ({
      ...base,
      border: "none",
      boxShadow: "none",
      fontSize: "14px",
      color: "#B9C3C8",
      marginLeft: "-20px",
      backgroundImage: "none",
      textShadow: "none",
    }),
    option: (base, state) => ({
      ...base,
      fontSize: "11px",
      color: state.isSelected ? "#282828" : "#B9C3C8",
      background: state.isSelected ? "rgba(185, 195, 200, 0.2)" : "white",
    }),
  };

  const handleChange = (selectedOption) => {
    // props.onSelection(selectedOption);
  };
  return (
    <Select options={DifficultOptions} styles={style} onChange={onChange} />
    // <Select options={DifficultOptions} styles={style} onChange={handleChange} />
  );
}

export default DifficultSelect;
