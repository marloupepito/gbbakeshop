import React, { useState, useEffect } from 'react';
import { IssuesCloseOutlined, UserOutlined,CalendarOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import { Breadcrumb } from 'antd';

function BreadCrumbs() {
    let { dates } = useParams();
    return ( 
        <Breadcrumb
        items={[
        {
            title: (
            <>
                <UserOutlined />
                <span>My Accounts</span>
            </>
            ),
        },
        {
            title: (
                <>
                    <IssuesCloseOutlined />
                    <span>Charges</span>
                </>
                ),
        },
        {
            title: (
                <>
                   <CalendarOutlined />
                    <span>{dates.replace(/-/g,' ').replace('.',',')}</span>
                </>
                ),
        },
        
        ]}
    />
     );
}

export default BreadCrumbs;