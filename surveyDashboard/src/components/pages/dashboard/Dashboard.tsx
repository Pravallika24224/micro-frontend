import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import routePaths from '../../../assets/routePaths';
import axios from 'axios';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const navigate = useNavigate();
  const [surveryList, setSurveyList] = useState<any>([])

  const yearList = ['2024', '2023', '2022', '2021'];

  const [year, setYear] = useState<any>(yearList[0])

  const getSurveyList = async () => {
    const res = await axios.get('http://localhost:3030/surveys')
    setSurveyList(res.data)
  }

  useEffect(() => {
    getSurveyList()
  }, [])

  const surveysCount = {}

  surveryList?.map((x: any) => moment(x.startDate).format('MMMM')).forEach((x: any) => {
    surveysCount[x] = (surveysCount[x] || 0) + 1
  })

  const order = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  const orderedSurveyCount = Object.keys(surveysCount).sort((a, b) => order.indexOf(b) - order.indexOf(a)).reverse().reduce((obj, key) => (obj[key] = surveysCount[key], obj), {})

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Surveys Dashboard',
      },
    },
    onClick(event:any, elements:any) {
      const labelName = Object.keys(orderedSurveyCount)[elements[0].index]
      navigate(routePaths.survey_list  + '/' + year + '/' + labelName, {state: {year: year, month: labelName}})
    },
  };

  const barChartData = {
    labels: Object.entries(orderedSurveyCount).map((entry) => entry[0]),
    datasets: [
      {
        label: 'surveys',
        backgroundColor: [
          'rgb(155, 205, 86)',
          "rgb(255, 99, 132)",
          'rgb(54, 162, 235)',
          'rgb(300, 205, 86)',
        ],
        borderColor: "black",
        data: Object.entries(orderedSurveyCount).map((entry) => entry[1]),
      },
    ],
  }

  const handleSelectChange = (e: any) => {
    setYear(e.target.value)
  };

  return (
    <div className='h-auto flex-1 p-7'>
      <div className='text-3xl font-bold pb-4'>Survey Dashboard</div>
      <select defaultValue={yearList[0]} onChange={handleSelectChange}>
        {yearList?.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
      <div style={{ width: '70%' }}>
        <Bar options={options} data={barChartData} />
      </div>
    </div>
  );
}

export default Dashboard;
