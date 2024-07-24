import React from 'react'
import { Pie } from 'react-chartjs-2';

const PieChart = ({ title, chartData }: any) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  
  return (
    <div className='w-1/2 p-2'>
      {/* <div style={{height: '200px', width: '200px'}}> */}
      <Pie
        data={chartData}
        options={options}
      />
      {/* </div> */}
    </div>
  )
}

export default PieChart
