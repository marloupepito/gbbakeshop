import React from 'react';
import { PullRequestOutlined, SendOutlined,ScheduleOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import {Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function DeliveryTabs() {
  const navigate = useNavigate();
  const tabs = window.location.pathname.split('/')[4]
  function nextTab(e){
    const branch = window.location.pathname.split('/')[2]
    const id = window.location.search.substring(1)
    navigate('/branch/'+branch+'/delivery/'+e+'?'+id)
  }
  return ( 
    <div>
    <Tabs
    onChange={nextTab}
    size="large"
      defaultActiveKey={tabs}
      items={[
          {
              label: (
              <span>
                <PullRequestOutlined />
                 Request
              </span>
            ),
            key: 'request',
            children: <Outlet />,
          },
          {
            label: (
            <span>
              <SendOutlined />
              Delivered
            </span>
          ),
          key: 'delivered',
          children: <Outlet />,
        },
        {
          label: (
          <span>
            <ScheduleOutlined />
            Received
          </span>
        ),
        key: 'received',
        children: <Outlet />,
      },
      ]}
    />
    <br />
    </div>
   );
}

export default DeliveryTabs;