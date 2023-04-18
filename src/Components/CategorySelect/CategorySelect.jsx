import React from "react";
import Select from "react-select";
import styles from "./CategorySelect.module.css";
import { ReactComponent as Arrow } from "./arrow.svg";

const CategorySelect = ({ onChange }) => {
  // const CategorySelect = (props) => {
  const CategoryOptions = [
    { value: "stuff", label: "STUFF", bgcolor: "#B9C3C8" },
    { value: "family", label: "FAMILY", bgcolor: "#FFE6D3" },
    { value: "health", label: "HEALTH", bgcolor: "#CDF7FF" },
    { value: "learning", label: "LEARNING", bgcolor: "#FFF6C0" },
    { value: "leisure", label: "LEISURE", bgcolor: "#F8D2FF" },
    { value: "work", label: "WORK", bgcolor: "#D3F6CE" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles }),
    control: (base) => ({
      ...base,

      border: 0,
      boxShadow: "none",
      fontSize: "11px",
      borderRadius: "0px 15px 15px 0px",
      backgroundColor: "wheat",
      minHeight: "25px",
      height: "25px",
      display: "flex",
      alignContent: "center",
      width: "100px",
      paddingRight: "10px",
    }),
    option: (styles, { data, isFocus, isSelected }) => {
      return {
        ...styles,
        background: isSelected ? data.bgcolor : "white",
        fontSize: "11px",
        color: "#282828",
      };
    },
  };
  const handleChange = (selectedOption) => {
    // updateTodo(selectedOption.value);
    // console.log(selectedOption.value + "cascasc");
    // props.onSelection(selectedOption);
  };

  return (
    <div style={{ width: "115px" }}>
      <Select
        components={{
          DropdownIndicator: () => <Arrow />,
          IndicatorSeparator: () => null,
        }}
        options={CategoryOptions}
        onChange={onChange}
        // onChange={handleChange}
        styles={colorStyles}
      />
    </div>
  );
};

export default CategorySelect;
