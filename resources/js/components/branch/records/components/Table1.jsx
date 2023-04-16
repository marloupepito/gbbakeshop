import React, { useState, useEffect } from "react";
import Modal1 from "./Modal1";
import axios from "axios";
import { SearchBranchId } from "../../../routes/Search";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Images from "./Images";
function Table1() {
    const branch_id = SearchBranchId().props.children;
    const [data,setData] = useState([])
    const hash  = useLocation();
    let { dates } = useParams();
    useEffect(() => {
        axios.get('/api/get_branch_expenses/'+branch_id+'/'+dates.replace(/-/g,' ').replace('.',','))
        .then(res=>{
           setData(res.data.status)
            
        })
    }, [hash.hash+dates]);
    return (
       <div className="card p-3">
        <div className="col-md-3 offset-md-9">
        <Modal1 />
        </div>
        <h6>EXPENSES (DAPAT NAAY RESIBO ANG GIPALIT)</h6>
         <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(res=>(
                        <tr key={res.key}>
                        <th scope="row">{res.name}</th>
                        <td>{res.description}</td>
                        <td>{res.amount}</td>
                        <td className="p-0 m-0"><Images imageid={res.images}/></td>
                    </tr>
                    ))
                } 
               
            </tbody>
        </table>
        <h5>Total: ₱ {
            data.map(res =>parseFloat(res.amount)).reduce((partialSum, a) => partialSum + a, 0)
        }</h5>
       </div>
    );
}

export default Table1;
