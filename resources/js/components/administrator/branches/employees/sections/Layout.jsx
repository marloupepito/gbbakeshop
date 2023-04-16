import React, { useState, useEffect } from 'react';
import Description from './components/Description';
import Tab from './components/Tabs';
function Layout() {
    
   const [data,setData] =useState([])
    useEffect(() => {
        axios.post('/get_every_account',{
            id:window.location.pathname.split('/')[6]
          })
          .then(res=>{
            setData(res.data.status)
          })
    }, []);
    return ( 
        <>
        <Description user={data}/>
        <br />
        <Tab />
        </>
     );
}

export default Layout;