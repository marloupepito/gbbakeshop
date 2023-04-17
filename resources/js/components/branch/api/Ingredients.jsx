import { useState,useEffect,useReducer } from "react";
import axios from 'axios'
import {SearchBranchId} from '../../routes/Search';
export function get_branch_ingredients() {
  
    const [branches,setBranches] = useState([])
    const branchid = SearchBranchId().props.children
      useEffect(() => {
        axios.post('/get_branch_ingredients',{
          id:branchid
        })
        .then(res=>{
            setBranches(res.data.status)
        })
      },[]);


    return ( 
        <>
        {branches}
        </>
     );

}


export function add_branch_ingredients(props){
        axios.post('/add_branch_ingredients',props)
          .then(res=>{
          
          })
    return (
        <>
        {props.children}
        </>
    )
}
