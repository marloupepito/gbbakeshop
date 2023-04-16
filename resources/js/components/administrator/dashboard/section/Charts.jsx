import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar,Line  } from "react-chartjs-2";
function DashboardCharts() {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Inventory Stats',
      },
    },
  };

  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [10,20,30,40,50,60],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [20,49,20,49,20,49],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Dataset 3',
        data: [5,10,50,49,30,19],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };


  
    return ( 
        <div>
          <Bar options={options} data={data} />
        </div>
     );
}

export default DashboardCharts;