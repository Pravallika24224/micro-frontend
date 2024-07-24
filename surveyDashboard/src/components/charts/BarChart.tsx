import React from 'react'
import { Bar } from 'react-chartjs-2';

const BarChart = ({title, chartData}: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true, 
        text: title,
      },
    },
  };
  
  return (
    <div className='w-1/2 p-2'>
      <Bar width={200} height={200} options={options} data={chartData}/>
    </div>
  )
}

export default BarChart
