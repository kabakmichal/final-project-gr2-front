import Select from "react-select";
import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

const DifficultOptions = [
  { value: "Easy", label: "🟢 Easy" },
  { value: "Normal", label: "🔵 Normal" },
  { value: "Hard", label: "🔴 Hard" },
];

function DifficultSelect() {
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
  };

  const handleChange = (selectedOption) => {
    // console.log(selectedOption.value);
    props.onSelection(selectedOption);
  };
  return (
    <Select options={DifficultOptions} styles={style} onChange={handleChange} />
  );
}

export default DifficultSelect;
