import React, { useEffect, useState } from 'react';
import routePaths from '../../../assets/routePaths';
import { useNavigate, useLocation } from 'react-router-dom';
import Table from '../../molecules/Table';
import axios from 'axios';
import moment from 'moment';

function SurveyList() {
  const navigate = useNavigate();
  const { state } = useLocation()
  const [surveryList, setSurveyList] = useState([])

  const getSurveyList = async () => {
    const res = await axios.get('http://localhost:3030/surveys')
    const data = state !== null 
    ? res.data?.filter((x: any) =>  moment(x.startDate).format('MMMM') === state.month && moment(x.startDate).format('YYYY') === state.year) 
    : res.data
    setSurveyList(data)
  }

  useEffect(() => {
    getSurveyList()
  }, [state])

  const handleClick = () => {
    navigate(routePaths.create_survey);
  };
  return (
    <div className='p-7 grow'>
      <div className='text-3xl font-bold pb-4'>Survey List</div>
      <button
        onClick={handleClick}
        className='inline-block text-sm px-4 py-2 leading-none border rounded hover:border-transparent hover:text-teal-500 hover:bg-white'>
        Create Survey
      </button>
      <Table data={surveryList} />
    </div>
  );
}

export default SurveyList;
