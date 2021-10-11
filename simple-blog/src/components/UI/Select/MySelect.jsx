import React from 'react';

const MySelect = ({defaultValue, options, onChange, value}) => {

    const onChangeSelect = e => {
        onChange(e.target.value);
    }
    return (
        <select value={value} onChange={onChangeSelect}>
            <option disabled={true} value="">{defaultValue}</option>
            {options.map(
                opt => <option key={opt.value} value={opt.value}>{opt.name}</option>
            )}
        </select>
    );
};

export default MySelect;