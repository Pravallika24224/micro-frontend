import React, { ChangeEvent, useState } from 'react';

const Modal = ({ type, handleFormData, formData }: any) => {
  const [showModal, setShowModal] = React.useState(false);
  const [count, setCount] = useState<string>('2');
  const [state, setState] = useState([]);

  const handleChange = (e: any) => {
    const temp: any = { ...state };
    temp[e.target.id] = e.target.value;
    setState(temp);
  };

  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
      setCount(newValue);
  }

  const handleSubmit = () => {
    setShowModal(false);
    handleFormData({ [type]: { ...formData[type], options: state } })
  };

  const fields = [];

  for (let i = 1; i <= count; i++) {
    fields?.push(
      <input
        id={`option${i}`}
        onChange={handleChange}
        type='text'
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block m-2 p-1'
        required
      />
    );
  }

  return (
    <>
      <button
        className='block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 m-2 text-center'
        type='button'
        onClick={() => setShowModal(true)}>
        Add Options
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                <div className='flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-small font-semibold mt-1.5'>
                    Add Options
                  </h3>
                  <button
                    className='end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center'
                    onClick={() => setShowModal(false)}>
                    <svg
                      className='w-3 h-3'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 14 14'>
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
                      />
                    </svg>
                    <span className='sr-only'>Close modal</span>
                  </button>
                </div>
                <div className='relative flex-auto'>
                  <div className='grid grid-cols-2 p-3 border-b border-solid border-blueGray-200 rounded-t'>
                    <label className='block mr-2 text-sm font-medium text-gray-900'>
                      Please select number of options:
                    </label>
                    <input
                      type='number'
                      min="2"
                      max="10"
                      value={count}
                      onChange={handleCountChange}
                      className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-1'
                      required
                    />
                  </div>
                  {fields}
                </div>
                <div className='flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  <button
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={handleSubmit}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
