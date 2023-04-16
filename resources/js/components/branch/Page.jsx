import React, { useState, useEffect } from 'react';
import BranchLayout from './Layout'
import {useNavigate } from "react-router-dom";
import { Skeleton } from 'antd';
function BranchPage() {
    const [session,setSession] = useState(null)
    const [loading,setLoading] = useState(true)
      const navigate = useNavigate();
      useEffect(() => {
          axios.get('/api/user')
          .then(res=>{
              setSession(res.data.branch_name)
              setLoading(false)
          })
          .catch(err=>{
              setSession('error')
              if(window.location.pathname !== '/'){
                  navigate('/');
                  setLoading(false)
              }
          })
      }, []);
    return ( 
        <Skeleton loading={loading}>
        <BranchLayout />
        </Skeleton>
     );
}

export default BranchPage;