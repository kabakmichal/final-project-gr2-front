import React from "react";
import Select from "react-select";
import styles from "./CategorySelect.module.css";
import { ReactComponent as Arrow } from "./arrow.svg";

const CategorySelect = (props) => {
  const { onChange } = props;

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
      fontSize: 11,
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
      return { ...styles, background: data.bgcolor };
    },
  };
  const handleChange = (selectedOption) => {};

  const currentTodo = JSON.parse(localStorage.getItem("currentToDo"));

  return (
    <div style={{ width: "115px" }}>
      <Select
        components={{
          DropdownIndicator: () => <Arrow />,
          IndicatorSeparator: () => null,
        }}
        options={CategoryOptions}
        onChange={onChange}
        styles={colorStyles}
        defaultInputValue={currentTodo.category}
      />
    </div>
  );
};

export default CategorySelect;
