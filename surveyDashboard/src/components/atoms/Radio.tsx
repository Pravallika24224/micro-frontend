import React, { useState } from 'react';

const Radio = ({ data, formData={}, handleChange = () => {}, disabled }: any) => {
  const [state, setState] = useState();
  const handleRadioChange = (e: any) => {
    setState(e.target.value);
    handleChange({ [data.type]: { ...formData[data.type], question: data.question, selectedOption: {value:e.target.value, key:e.target.id}, id: data.id } })
  };

  return (
    <div>
      {Object.entries(data?.options).map((entry) => {
        let key: string = entry[0];
        let value: any = entry[1];
        return (
          <div className='flex items-center mb-4' onChange={handleRadioChange}>
            <input
              key={key}
              id={key}
              type='radio'
              checked={value === state}
              value={value}
              disabled={disabled}
              name='default-radio'
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500'
            />
            <label
              htmlFor='default-radio-1'
              className='ms-2 text-sm font-medium text-gray-900'>
              {value}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Radio;
