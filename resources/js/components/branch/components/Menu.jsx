import React, { useState,useEffect } from 'react';
import {  Menu, theme } from 'antd';
import { GetAllBranch } from './../../administrator/api/Branch';
import { ShopTwoTone,SnippetsTwoTone,SettingTwoTone,ProfileTwoTone,ContactsTwoTone,DashboardTwoTone,IdcardTwoTone } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { SearchBranchId } from '../../routes/Search';
import {BranchNameParams} from '../../routes/Params'
import moment from 'moment';
const Menus = () => {
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(['parent1']);
    
    const id = SearchBranchId().props.children
    const branchName = BranchNameParams().props.children
    const category = window.location.pathname.split('/')[3]

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const branches = GetAllBranch().props.children
    function onTitleClick(e){
      navigate(e.target.id.replace(/ /g,'_')+id);
    }
 
    const rootSubmenuKeys = branches.map(res=>'parent');
    const onOpenChange = (keys) => {
      const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(keys);
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
      }
    };

 
      useEffect(() => {
        setOpenKeys(['parent'+id])
        console.log(category)
    }, []);
    return ( 
        <Menu
          onOpenChange={onOpenChange}
          theme="light"
          mode="inline"
          defaultSelectedKeys={[category]}
          items={
           [
            {
                key:'ingredients',
                label:<a id={'/branch/'+branchName+'/ingredients?branch_id='} onClick={onTitleClick}>Ingredients</a>,
                icon:<SettingTwoTone />,
            },
            {
                key:'delivery',
                label:<a id={'/branch/'+branchName+'/delivery/request?branch_id='} onClick={onTitleClick}>Delivery</a>,
                icon:<SnippetsTwoTone />,
            },
            {
                key:'production',
                label:<a id={'/branch/'+branchName+'/production/create?branch_id='} onClick={onTitleClick}>Production</a>,
                icon:<ProfileTwoTone />,
            },
            {
              key:'records',
              label:<a id={'/branch/'+branchName+'/records/'+moment().format('MMMM-DD.-YYYY-A')+'?branch_id='} onClick={onTitleClick}>Records</a>,
              icon:<ProfileTwoTone />,
          },
           {
                    key: String('accounts'),
                    label:<a id={'/branch/'+branchName+'/accounts?branch_id='} onClick={onTitleClick}>My Account</a>,
                    icon:<IdcardTwoTone />,
                },
          ]
        }
        />
     );
}
 
export default Menus;