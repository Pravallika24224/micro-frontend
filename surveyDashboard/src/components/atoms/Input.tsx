import React from 'react';

const Input = ({ type, index, handleFormData, formData }: any) => {
  const handleChange = (e: any) => {
    handleFormData({[type]: { ...formData[type],question: e.target.value, id: index, type: type}})
  };
  return (
    <input
      type='text'
      id='question'
      onChange={handleChange}
      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
      placeholder='Please enter your question here'
      required
    />
  );
};

export default Input;
