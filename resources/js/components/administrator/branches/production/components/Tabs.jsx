import React from 'react';
import { PullRequestOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Outlet } from "react-router-dom";
import moment from 'moment';
import { useNavigate } from "react-router-dom";
function ProductionTabs() {
    const navigate = useNavigate();
    const tabs = window.location.pathname.split('/')[4]
    function nextTab(e){
        const branch = window.location.pathname.split('/')[2]
        const id = window.location.search.substring(1)
        if(e === 'records'){
          navigate('/administrator/'+branch+'/production/'+e+'/'+moment().format('MMMM-DD.-YYYY-A')+'?'+id)
        }else{
          navigate('/administrator/'+branch+'/production/'+e+'?'+id)
        }
      }
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
                  Beginning Production
                </span>
              ),
              key: 'create',
              children: <Outlet />,
            },
              {
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