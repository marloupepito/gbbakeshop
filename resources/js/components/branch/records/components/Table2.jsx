import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { SearchBranchId } from "../../../routes/Search";
import Modal2 from "./Modal2";
import { useLocation } from 'react-router-dom';
function Table2() {
    let { dates } = useParams();
    const branch_id = SearchBranchId().props.children;
    const [data, setData] = useState([]);
    const hash  = useLocation();
    useEffect(() => {
        axios.post('/api/get_branch_charges/'+dates.replace(/-/g,' ').replace('.',',')+'/'+branch_id)
        .then(res=>{
            const credits = res.data.status1;
            credits.push(...res.data.status2)
            setData(credits)
           
        })
    }, [hash.hash+dates]);


    return (
       <div className="card p-3">
        <div className="col-md-3 offset-md-9">
        <Modal2 />
        </div>
        <h6>CREDIT/CHARGES</h6>
         <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(res=>(
                        <tr className="text-capitalize" key={res.key+res.name+res.description}>
                        <th scope="row">{res.name}</th>
                        <td>{res.description}</td>
                        <td>{res.amount}</td>
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

export default Table2;
