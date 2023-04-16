import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SearchBranchId } from "../../../../../../routes/Search";
import moment from 'moment'
import { useParams } from 'react-router-dom';
function Tables() {
  const branch_id = SearchBranchId().props.children;
  let { dates } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const userid = window.location.pathname.split('/')[6]
    axios.post('/get_user_charge',{
      branchid:branch_id,
      userid:userid,
      date:dates.replace(/-/g,' ').replace('.',',')
    })
    .then(res=>{
      console.log(res.data.status)
      setData(res.data.status)
    })
  }, [dates]);
    return ( 
        <table className="table">
  <thead>
    <tr>
      <th>Name of Bread</th>
      <th>KILOS</th>
      <th>Actual #pcs</th>
      <th>Price</th>
      <th>Oras Naluto</th>
      <th className='text-danger'>Target (PCS)</th>
      <th className='text-danger'>Short/ Over</th>
      <th className='text-danger'>Price X Shortage</th>
    </tr>
  </thead>
  <tbody>
    {
      data.map(res=>(
        <tr key={res.key}>
        <th scope="row">{res.bread_name}</th>
        <td>{res.kilo}</td>
        <td>{res.production}</td>
        <td>{res.price}</td>
        <th scope="row">{moment(res.created_at).format('LLL')}</th>
        <td>{res.target}</td>
        <td>{res.charge} / {res.overs}</td>
        <td>₱ {res.charge*res.price}</td>
      </tr>
      ))
    }
  
  </tbody>
</table>
     );
}

export default Tables;