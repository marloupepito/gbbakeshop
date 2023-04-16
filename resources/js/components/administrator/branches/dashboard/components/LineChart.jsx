import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment/moment';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Sales Line Chart',
      },
    },
  };
  

  
function LineChart(props) {
  let separatedData = {};

props.sales.forEach((obj) => {
  let dateString =moment(obj.created_at).format('L') ; // get the date string
  if (!separatedData[dateString]) { // if the key doesn't exist, create a new array
    separatedData[dateString] = [];
  }
  separatedData[dateString].push(obj); // push the object into the corresponding array
});

const dates = Object.entries(separatedData).map(res=>res[0]);
const labels = dates

const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: Object.values(separatedData).map(res=>res.map(es=>parseFloat(es.sales)).reduce((partialSum, a) => partialSum + a, 0)),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    //   {
    //     label: 'Dataset 2',
    //     data: ['71','42','32','76','42','32','23'],
    //     borderColor: 'rgb(53, 162, 235)',
    //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
    //   },
    ],
  };

//   const expenses=props.sales
//   const dates = props.sales.map(res =>moment(res.created_at).format('L'))
//   const uniqueDate=dates.filter((value, index, self) =>
//    index === self.findIndex((t) => (
//      t.date === value.date
//    ))
//  )
 
//   const searchDate = searchObjects(expenses,uniqueDate)
//   function searchObjects(objects, searchStr) {
//     return objects.filter(obj => {
//       // convert all object values to strings and check if they contain the search string
//       return Object.values(obj).some(val => String(val).includes(searchStr));
//     });
//   }


  //this is remove all duplicates from an array of objects
  
    return ( 
        <>
        <Line options={options} data={data} />
        </>
     );
}

export default LineChart;