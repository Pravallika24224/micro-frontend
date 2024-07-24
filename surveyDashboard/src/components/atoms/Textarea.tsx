import React from 'react';

const Textarea = ({data, formData, handleChange, disabled}: any) => {
  const handleTextareaChange = (e: any) => {
    handleChange({ [data.type]: { ...formData[data.type], question: data.question, answer: e.target.value, id: data.id } })
  };

  return (
    <textarea
      id='message'
      rows={2}
      onChange={handleTextareaChange}
      disabled={disabled}
      className='block p-2.5 my-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500'
      placeholder='Write your thoughts here...'></textarea>
  );
};

export default Textarea;
