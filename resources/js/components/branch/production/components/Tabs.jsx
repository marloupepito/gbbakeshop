import React,{useState,useEffect  } from 'react';
import { PullRequestOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

function ProductionTabs() {
    const navigate = useNavigate();
    const [position,setPosition] =useState(null)
    const tabs = window.location.pathname.split('/')[4]
    function nextTab(e){
        const branch = window.location.pathname.split('/')[2]
        const id = window.location.search.substring(1)
       
        if(e === 'records'){
          navigate('/branch/'+branch+'/production/'+e+'/'+moment().format('MMMM-DD.-YYYY-A')+'?'+id)
        }else{
          navigate('/branch/'+branch+'/production/'+e+'?'+id)
        }
      }


      useEffect(() => {

        setPosition(JSON.parse(localStorage.getItem("user")).position)

      }, []);

      //JSON.parse(localStorage.getItem("user")).name
    return ( 
        <Tabs
        onChange={nextTab}
        size="large"
        defaultActiveKey={tabs}
        items={[
            {
                label: (
                <span>
                  <PullRequestOutlined />
                  Bakers Production
                </span>
              ),
              key: 'create',
              children: <Outlet />,
            },
              {
                disabled: position==='Chief Baker' ||  position==='Baker' ||  position==='Supervisor'? false:true,
              label: (
              <span>
                <PullRequestOutlined />
                 Bakers Report
              </span>
                ),
                key: 'list',
                children: <Outlet />,
              },
           {
            disabled: position==='Chief Baker' ||  position==='Baker' || position==='Cashier' ||  position==='Supervisor'? false:true,
              label: (
              <span>
                <PullRequestOutlined />
                 Bread Report
              </span>
            ),
            key: 'bread',
            children: <Outlet />,
          },
            {
               disabled: position==='Cashier' ||  position==='Supervisor'? false:true,
              label: (
              <span>
                <PullRequestOutlined />
                Sales Report
              </span>
            ),
            key: 'records',
            children: <Outlet />,
          },
 
          
      //     {
      //       label: (
      //       <span>
      //         <PullRequestOutlined />
      //          Bread Sold
      //       </span>
      //     ),
      //     key: 'sold',
      //     children: <Outlet />,
      //   },
      //   {
      //     label: (
      //     <span>
      //       <PullRequestOutlined />
      //        Bread Out
      //     </span>
      //   ),
      //   key: 'out',
      //   children: <Outlet />,
      // },
        ]}
      />
     );
}

export default ProductionTabs;