import React from 'react'
import ReactDOM from 'react-dom'
import { useAuth } from 'surveyDashboard/authContext'

const AdminDetails = () => {
  const {auth, updateAuth} = useAuth()
  const handleClick = () => {
    updateAuth(false, '', 0)
  }
  return (
    <div className='h-auto flex-1 p-7'>
      <div className="text-center">
        <div className='subpixel-antialiased font-sans font-medium text-gray-800 text-3xl m-2'>
          {`Displaying this page from Campaign application`}
        </div>
        <button
          onClick={handleClick}
          className='block text-white bg-green-700 hover:bg-green-800 font-semibold font-sans focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 m-2 text-center'>
          Logout from Campaign Application
        </button>
      </div>
    </div>
  )
}

export default AdminDetails
