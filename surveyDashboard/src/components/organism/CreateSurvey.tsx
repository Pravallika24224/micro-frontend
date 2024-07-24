import React, { useState } from 'react';
import Question from '../molecules/Question';
import SurveyHeader from '../atoms/SurveyHeader';
import axios from 'axios';
import questionnaire from '../../jsonData/questionnaire.json'
import { useNavigate } from 'react-router-dom';
import routePaths from '../../assets/routePaths';
import { useAuth } from 'surveyDashboard/authContext';
import moment from 'moment';

const CreateSurvey = () => {
  const { auth } = useAuth();
  const navigate = useNavigate()
  const currentDate = new Date()
  function addDays(theDate: any, days: number) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }
  const addedDays = addDays(currentDate, 100)
  const startDate = moment().format('L');
  const endDate = moment(addedDays).format('L')
  
  const [formData, setFormData] = useState<any>({ startDate: startDate, endDate: endDate, status: 'Active', userId: auth.id })

  const handleFormData = (data: any) => {
    setFormData({ ...formData, ...data })
  }

  const handleSubmit = async () => {
    const res = await axios.post('http://localhost:3030/surveys', formData);
    navigate(routePaths.survey_list)
    console.log('Form data submitted successfully:', res.data);
  }

  return (
    <div className="p-7 grow">
      <div className='text-3xl font-bold pb-4'>Create Survey</div>
      <SurveyHeader handleFormData={handleFormData} />
      {questionnaire?.map(item => (
        <div>
          <Question type={item.type} index={item.id} handleFormData={handleFormData} formData={formData} />
        </div>
      ))}
      <div className='flex items-center justify-end'>
        <button
          className='block text-white bg-green-700 hover:bg-green-800 font-semibold font-sans focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 m-2 text-center'
          type='button'
          onClick={handleSubmit}>
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default CreateSurvey;
