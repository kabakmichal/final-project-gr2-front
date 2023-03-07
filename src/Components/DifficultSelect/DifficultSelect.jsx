import Select from "react-select";
import React from "react";

const DifficultOptions = [
  { value: "Easy", label: "🟢 Easy" },
  { value: "Normal", label: "🔵 Normal" },
  { value: "Hard", label: "🔴 Hard" },
];

const DifficultSelect = (props) => {
  const style = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
  };

  const handleChange = (selectedOption) => {
    // console.log(selectedOption.value);
    props.onSelection(selectedOption);
  };

  return (
    <Select options={DifficultOptions} styles={style} onChange={handleChange} />
  );
};

export default DifficultSelect;
