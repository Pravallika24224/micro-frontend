import React from 'react';

const Label = ({ type, index }: any) => {

  return (
    <div className="flex">
      <p className="mr-2 block mb-0.5 text-md subpixel-antialiased font-semibold font-sans text-gray-800">{`${index}. Enter the question of type:`}</p>
      <p className="ml-4 block mb-0.5 text-md subpixel-antialiased font-bold font-sans text-gray-800">{type}</p>
    </div>
  );
};

export default Label;
