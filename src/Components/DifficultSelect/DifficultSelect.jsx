import Select from "react-select";
import React from "react";
import { ReactComponent as Arrow } from "./arrow.svg";

function DifficultSelect(props) {
  const { onChange } = props;

  const DifficultOptions = [
    { value: "easy", label: "🟢 Easy" },
    { value: "normal", label: "🔵 Normal" },
    { value: "hard", label: "🔴 Hard" },
  ];

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

  const currentTodo = JSON.parse(localStorage.getItem("currentToDo"));

  const handleChange = (selectedOption) => {
    // props.onSelection(selectedOption);
  };
  return (
    <Select
      options={DifficultOptions}
      styles={style}
      onChange={onChange}
      defaultInputValue={currentTodo.difficulty || DifficultOptions.label}
    />
  );
}

export default DifficultSelect;
