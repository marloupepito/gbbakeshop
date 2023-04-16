import React, { useState, useEffect } from "react";
import Profile from "./components/Profile";
import Tab from "./components/Tabs";
function EmployeesLayout() {
    return (
      <div className="row">
        <div className="col-md-12">
            <Profile />
        </div>
        <div className="col-md-12">
           <Tab />
        </div>
      </div>
    );
}

export default EmployeesLayout;
