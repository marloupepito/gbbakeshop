import { useState,useEffect,useReducer } from "react";
import axios from 'axios'
import { BranchNameParams } from "../../routes/Params";
export function get_branch_ingredients() {
  
    const [branches,setBranches] = useState([])
    const branchName = BranchNameParams().props.children.replace(/_/g,' ')
      useEffect(() => {
        axios.post('/get_branch_ingredients',{
           branchName:branchName
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
