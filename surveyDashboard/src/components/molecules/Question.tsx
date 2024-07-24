import React from 'react';
import Checkbox from '../atoms/Checkbox';
import Dropdown from '../atoms/Dropdown';
import Model from '../atoms/Model';
import Radio from '../atoms/Radio';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

function Question({ type, index, handleFormData, formData }: any) {
  return (
    <div>
      <Label type={type} index={index} />
      <Input type={type} index={index} handleFormData={handleFormData} formData={formData} />
      <div className="flex items-center space-x-4">
        {type !== 'Free-text' && <Model type={type} handleFormData={handleFormData} formData={formData}/>}
      </div>
      {type === 'Radio' && formData[type] !== undefined &&
        Object.hasOwn(formData[type], 'options') && <Radio data={formData[type]} />}
      {type === 'Dropdown' && formData[type] !== undefined &&
        Object.hasOwn(formData[type], 'options') && (
          <Dropdown data={formData[type]} />
        )}
      {type === 'Checkbox' && formData[type] !== undefined &&
        Object.hasOwn(formData[type], 'options') && (
          <Checkbox data={formData[type]} />
        )}
    </div>
  );
}

export default Question;
