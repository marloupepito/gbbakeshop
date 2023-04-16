import { Badge, Descriptions } from 'antd';
import React from 'react';
const Description = () => (
   <div className='p-3'>
    <b className='font-weight-bold'>List of Expenses</b>
     <table className="table table-striped">
    <thead>
      <tr>
        <th scope="col">Expenses</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
      </tr>
    </tbody>
  </table>
   </div>
);
export default Description;