import React from 'react';
import Select from 'react-select';

const CategorySelect = () => {
    const CategoryOptions =[
        { value: 'STUFF', label: 'STUFF', color: '#B9C3C8' },
        { value: 'FAMILY', label: 'FAMILY', color: '#FFE6D3' },
        { value: 'HEALTH', label: 'HEALTH', color: '#CDF7FF' },
        { value: 'LEARNING', label: 'LEARNING', color: '#FFF6C0' },
        { value: 'LEISURE', label: 'LEISURE', color: '#F8D2FF' },
        { value: 'WORK', label: 'WORK', color: '#D3F6CE' },
    ];
    const colorStyles = {
        control: (styles) => ({ ...styles }),
        control: base => ({
            ...base,
            border: 0,
            boxShadow: "none",
            fontSize: 11,
            paddingTop: 36,
            paddingBottom: 21,
        }),
        option: (styles, {data,  isFocus, isSelected }) => {
            console.log("option", data, isFocus, isSelected );
            return { ...styles, background: data.color };
        },
    };
    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption);
    };

    return (
        <Select
        options={CategoryOptions}
        onChange={handleChange}
        styles={colorStyles}/>
    );
};

export default CategorySelect;
