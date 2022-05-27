import React from 'react';
import Select from 'react-select';
import themes from './themes';

const Dropdown = ({ handleChange }) => {
  const options = [];

  Object.keys(themes).forEach((theme) => {
    options.push({
      value: theme,
      label: theme.charAt(0).toUpperCase() + theme.slice(1)
    });
  });

  return (
    <div className="theme-dropdown w-25 text-black">
      <Select
        className="select-filter"
        onChange={handleChange}
        options={options}
      />
    </div>
  );
};

export default Dropdown;