import { useState,useEffect,useReducer } from "react";
import axios from 'axios'
import { SearchBranchId } from "../../routes/Search";

export function Get_all_production(props) {
  const id = SearchBranchId().props.children
  const [data,setData] = useState([])
  useEffect(() => {
    axios.post('/get_all_production',{
      id:id
      })
      .then(res=>{
           setData(res.data.status)
      })
  }, [props]);
    return <>{data}</>
}

export function GetProductionCode(props){
  const [data,setData] = useState([])
 useEffect(() => {
  axios.post('/get_production_code',{
    randomid:props
    })
    .then(res=>{
      setData(res.data.status)
    })  
 }, []);

    return <>{data}</>
}

