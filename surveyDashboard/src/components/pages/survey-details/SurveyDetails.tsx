import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import PieChart from '../../charts/PieChart'
import BarChart from '../../charts/BarChart';
import DoughnutChart from '../../charts/DoughnutChart';

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip,
  Legend
);
const SurveyDetails = () => {
  const { state } = useLocation()
  const [userSurveyData, setUserSurveyData] = useState<any>([])

  const getUsersSurveyList = async () => {
    const res = await axios.get('http://localhost:3030/usersurveys')
    const filteredData = res.data.filter((x: any) => x.surveyId === state.id)
    setUserSurveyData(filteredData)
  }

  useEffect(() => {
    getUsersSurveyList()
  }, [state.id])

  const radioCounts = {}
  userSurveyData.map((data: any) => data['Radio'].selectedOption.value).forEach((x: any) => {
    radioCounts[x] = (radioCounts[x] || 0) + 1
  });

  const pieChartData = {
    labels: Object.entries(radioCounts).map((entry) => entry[0]),
    datasets: [
      {
        backgroundColor: [
          "rgb(255, 99, 132)",
          'rgb(54, 162, 235)',
          'rgb(155, 205, 86)',
          'rgb(100, 205, 86)'
        ],
        borderColor: "black",
        data: Object.entries(radioCounts).map((entry) => entry[1]),
      },
    ],
  }

  const dropdownCounts = {}
  userSurveyData.map((data: any) => data['Dropdown'].selectedOption.value).forEach((x: any) => {
    dropdownCounts[x] = (dropdownCounts[x] || 0) + 1
  });

  const barChartData = {
    labels: Object.entries(dropdownCounts).map((entry) => entry[0]),
    datasets: [
      {
        backgroundColor: [
          'rgb(155, 205, 86)',
          "rgb(255, 99, 132)",
          'rgb(54, 162, 235)',
          'rgb(300, 205, 86)',
        ],
        borderColor: "black",
        data: Object.entries(dropdownCounts).map((entry) => entry[1]),
      },
    ],
  }

  const checkboxCounts = {}
  const selectedCheckboxOptions = userSurveyData.map((data: any) => data['Checkbox'].selectedOption)
  selectedCheckboxOptions.map((x: any) => x.map((y: any) => y.value).forEach((z: any) => {
    checkboxCounts[z] = (checkboxCounts[z] || 0) + 1
  }))

  const doughnutData = {
    labels: Object.entries(checkboxCounts).map((entry) => entry[0]),
    datasets: [
      {
        backgroundColor: [
          'rgb(155, 205, 86)',
          "rgb(255, 99, 132)",
          'rgb(54, 162, 235)',
          'rgb(300, 205, 86)',
        ],
        borderColor: "black",
        data: Object.entries(checkboxCounts).map((entry) => entry[1]),
      },
    ],
  }

  return (
    <div className="p-7">
      <div className='text-3xl font-bold pb-4'>Survey Details</div>
      <div className='flex  flex-wrap '>
        <PieChart title={state['Radio'].question} chartData={pieChartData} />
        <BarChart title={state['Dropdown'].question} chartData={barChartData} />
        <DoughnutChart title={state['Checkbox'].question} chartData={doughnutData} />
      </div>
    </div>
  )
}

export default SurveyDetails
