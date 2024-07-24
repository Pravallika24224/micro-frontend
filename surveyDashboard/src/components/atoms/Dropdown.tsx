import React from 'react';

const Dropdown = ({ data, formData={}, handleChange = () => {}, disabled }: any) => {

  const handleDropdownChange = (e: any) => {
    handleChange({ [data.type]: { ...formData[data.type], question: data.question, selectedOption: {value:e.target.value, key:e.target.id}, id: data.id } })
  };
  return (
    <div>
      <select
        id='dropdown-options'
        onChange={handleDropdownChange}
        disabled={disabled}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-52 p-2.5'>
        <option value='select from the dropdown'>
          Select from the dropdown
        </option>
        {Object.entries(data.options).map((entry) => {
          let key: string = entry[0];
          let value: any = entry[1];
          return (
            <option id={key} key={key} value={value}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
