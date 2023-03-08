import React from "react";
import Select from "react-select";
import styles from "./CategorySelect.module.css";
import { ReactComponent as Arrow } from "./arrow.svg";


const CategorySelect = (props) => {
  const CategoryOptions = [
    { value: "STUFF", label: "STUFF", bgcolor: "#B9C3C8" },
    { value: "FAMILY", label: "FAMILY", bgcolor: "#FFE6D3" },
    { value: "HEALTH", label: "HEALTH", bgcolor: "#CDF7FF" },
    { value: "LEARNING", label: "LEARNING", bgcolor: "#FFF6C0" },
    { value: "LEISURE", label: "LEISURE", bgcolor: "#F8D2FF" },
    { value: "WORK", label: "WORK", bgcolor: "#D3F6CE" },
  ];
  const colorStyles = {
    control: (styles) => ({ ...styles }),
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
      fontSize: 11,
      borderRadius:"0px 15px 15px 0px",
      backgroundColor: "wheat",
      minHeight:"25px",
      height:"25px",
      display:"flex",
      alignContent:"center",
      width:"100px",
      paddingRight:"10px"
    }),
    option: (styles, { data, isFocus, isSelected }) => {
      return { ...styles, background: data.bgcolor };
    },
  };
  const handleChange = (selectedOption) => {
    props.onSelection(selectedOption);
  };

  return (
    <div style={{ width: "115px" }}>
      <Select
      components={{ DropdownIndicator:() => <Arrow/>, IndicatorSeparator:() => null }}
        options={CategoryOptions}
        onChange={handleChange}
        styles={colorStyles}
      />
    </div>
  );
};

export default CategorySelect;
