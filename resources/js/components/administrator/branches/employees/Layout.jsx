import React, { useState, useEffect } from 'react';
import EmployeesForm from './components/Form.jsx'
import {Outlet } from "react-router-dom";
{/* <EmployeesForm /> */}
function EmployeesLayout() {
    return ( 
       <>
       <Outlet />
       </>
     );
}

export default EmployeesLayout;