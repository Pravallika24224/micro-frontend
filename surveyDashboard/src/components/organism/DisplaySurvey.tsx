import React, { useState } from 'react'
import axios from 'axios'
import Radio from '../atoms/Radio'
import Dropdown from '../atoms/Dropdown'
import Label from '../atoms/Label'
import CheckBox from '../atoms/Checkbox'
import Textarea from '../atoms/Textarea'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import routePaths from '../../assets/routePaths'
import { useAuth } from 'surveyDashboard/authContext';

const DisplaySurvey = () => {
  const { auth } = useAuth();
  const navigate = useNavigate()
  const { state } = useLocation()

  const survey = state?.survey
  const disabled = state?.disabled
  const [formData, setFormData] = useState<any>({ userId: auth.id, surveyId: survey.id })

  const handleChange = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  const handleSubmit = async () => {
    const res = await axios.post(`http://localhost:3030/usersurveys`, formData);
    console.log('Form data submitted successfully:', res.data);
    navigate(routePaths.survey_list)
  }
  return (
    survey ? <div className="h-screen w-screen p-7">
      <h2 className="text-2xl font-bold mb-2">{survey.surveyName}</h2>
      <div className="mb-4">
        <p className="mr-2 block mb-0.5 text-md subpixel-antialiased font-semibold font-sans text-gray-800">{`${survey['Radio'].id}. ${survey['Radio'].question}`}</p>
        <Radio data={survey['Radio']} formData={formData} handleChange={handleChange} disabled={disabled} />
      </div>
      <div className="mb-4">
        <p className="mr-2 block mb-0.5 text-md subpixel-antialiased font-semibold font-sans text-gray-800">{`${survey['Dropdown'].id}. ${survey['Dropdown'].question}`}</p>
        <Dropdown data={survey['Dropdown']} formData={formData} handleChange={handleChange} disabled={disabled} />
      </div>
      <div className="mb-4">
        <p className="mr-2 block mb-0.5 text-md subpixel-antialiased font-semibold font-sans text-gray-800">{`${survey['Checkbox'].id}. ${survey['Checkbox'].question}`}</p>
        <CheckBox data={survey['Checkbox']} formData={formData} handleChange={handleChange} disabled={disabled} />
      </div>
      <div className="mb-4">
        <p className="mr-2 block mb-0.5 text-md subpixel-antialiased font-semibold font-sans text-gray-800">{`${survey['Free-text'].id}. ${survey['Free-text'].question}`}</p>
        <Textarea data={survey['Free-text']} formData={formData} handleChange={handleChange} disabled={disabled} />
      </div>
      <div className="flex items-center justify-end">
        <button
          className='block text-white bg-green-700 hover:bg-green-800 font-semibold font-sans focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 m-2 text-center'
          type="submit"
          disabled={disabled}
          onClick={handleSubmit}
        >
          SUBMIT
        </button>
      </div>
    </div> : ''
  );
}

export default DisplaySurvey
