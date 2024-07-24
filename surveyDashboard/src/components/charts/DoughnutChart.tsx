import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const DoughnutChart = ({ title, chartData }: any) => {
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
    <Doughnut
      data={chartData}
      options={options}
    />
    </div>
  )
}

export default DoughnutChart
