import React, { useState, useEffect } from 'react';
import {Outlet } from "react-router-dom";
function DashboardLayout() {
    return ( 
        <div>
             <Outlet />
        </div>
     );
}

export default DashboardLayout;