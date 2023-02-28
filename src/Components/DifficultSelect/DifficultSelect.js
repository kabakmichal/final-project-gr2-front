import Select from 'react-select';

const DifficultOptions =[
    { value: 'Easy', label: '🟢 Easy' },
    { value: 'Normal', label: '🔵 Normal' },
    { value: 'Hard', label: '🔴 Hard' },
];

    function DifficultSelect() {
        const style = {
            control: base => ({
                ...base,
                border: 0,
                boxShadow: "none",
                fontSize: 14,
            })
        };
    return (
        <Select
        options={DifficultOptions} styles={style}/>
    );
}

export default DifficultSelect;