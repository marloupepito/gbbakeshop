import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import moment from 'moment';


function Timelines() {
    const [data,setData] = useState([])
//RecordsController
    useEffect(() => {
        axios.get('/api/my_account_production/'+JSON.parse(localStorage.getItem("user")).id)
        .then(res=>{
            setData(res.data.status)
        })
    }, []);

    
    return ( 
        <div className='container'>
        <Timeline
          items={
            data.map(res=>( {
                
        dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: 'green',
                children: 'On '+ moment(res.created_at).format('LLL')+' you created ' + res.bread_name + ' with the total of '+res.total +' has charge of '+res.charge+'pcs and over of '+res.overs+'pcs',
              }))
          }
        />
        </div>
     );
}

export default Timelines;
