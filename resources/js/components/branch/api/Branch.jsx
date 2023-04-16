import { useState,useEffect,useReducer } from "react";
import axios from 'axios'

export function GetAllBranch() {
    const [branches,setBranches] = useState([])

    useEffect(() => {
        axios.post('/get_all_branch')
        .then(res=>{
            setBranches(res.data.status)
        })
    }, []);
    return ( 
        <>
        {branches}
        </>
     );
}

export function Get_all_production() {
    const [branches,setBranches] = useState([])
    const id = window.location.search.substring(1)
    
    
    useEffect(() => {
        axios.post('/get_all_production',{
            id:id
        })
        .then(res=>{
            setBranches(res.data.status)
            dispatch()
        }) 
    }, []);
    
    function reducer(state, action) {
        return {branches:branches};
      }
      const Initualvalue = {branches};
      const [state, dispatch] = useReducer(reducer, Initualvalue);
     
      return (
        <>
         {state.branches}
        </>
      );
}


export function get_branch_ingredients() {
    const [branches,setBranches] = useState([])

    useEffect(() => {
        axios.post('/get_branch_ingredients',{
           branchName:window.location.pathname.split('/')[2].replace(/_/g,' ')
        })
        .then(res=>{
            setBranches(res.data.status)
        })
      }, []);
    return ( 
        <>
        <Get_all_production />
        {branches}
        </>
     );
}
