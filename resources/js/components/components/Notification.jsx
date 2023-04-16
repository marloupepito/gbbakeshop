import React, { useState, useEffect } from 'react';
import { Button, notification, Space } from 'antd';
const key = 'updatable';
export function AppNotification(props) {

  const [api, contextHolder] = notification.useNotification();
      useEffect(() => {
        api[props.type]({
          key,
        message:props.message
        });
  
      }, [props.type]);
   return (
     <>
       {contextHolder}
     </>
   );
}

