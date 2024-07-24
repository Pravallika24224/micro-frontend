import React, { useState } from 'react';

function CheckBox({ data, formData={}, handleChange = () => {}, disabled }: any) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<any>([]);

  const handleCheckboxChange = (event: {
    target: { value: string; checked: boolean, id: string };
  }) => {
    const checkedValue = event.target.value;
    const checkedId = event.target.id
    if (event.target.checked) {
      setSelectedCheckboxes([...selectedCheckboxes, {id:checkedId, value: checkedValue}]);
      handleChange({[data.type]: {...formData[formData.type],question: data.question, selectedOption: [...selectedCheckboxes, {id:checkedId, value: checkedValue}], id: data.id}})

    } else {
      setSelectedCheckboxes(selectedCheckboxes.filter((data: any) => data.id !== checkedId));
      handleChange({[data.type]: {...formData[formData.type],question: data.question, selectedOption: selectedCheckboxes.filter((data: any) => data.id !== checkedId), id: data.id}})
    }
  };

  const CheckboxesComp = () => {
    return Object.entries(data.options).map((entry) => {
      let key: string = entry[0];
      let value: any = entry[1];
      return (
        <div className='flex items-center mb-4'>
          <input
            id={key}
            key={key}
            type='checkbox'
            value={value}
            disabled={disabled}
            checked={selectedCheckboxes.some((data:any) => data.id === key)}
            onChange={handleCheckboxChange}
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
          />
          <label
            htmlFor='default-checkbox'
            className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
            {value}
          </label>
        </div>
      );
    });
  };

  return <CheckboxesComp />;
}

export default CheckBox;
