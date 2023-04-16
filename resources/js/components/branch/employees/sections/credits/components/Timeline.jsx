import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
function Timelines() {
const [data,setData] = useState([])

    useEffect(() => {
        axios.get('/api/get_user_credits/'+JSON.parse(localStorage.getItem("user")).id)
        .then(res=>{
            setData(res.data.status)
            console.log(data.map(ress=>ress.key))
        })
    }, []);
    return ( 
        <Timeline
            items={
                data.map(res=>({
                    color: res.status === null?'red':'green',
                    children:res.status === null?"You've a charges the description of '"+res.description+"' and the amount of " +res.amount:
                    'Your charges is already paid with the amount of ' + res.amount,
                }))
          
        }
        />
     );
}

export default Timelines;