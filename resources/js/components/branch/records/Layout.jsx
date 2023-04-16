import React, { useState, useEffect } from "react";
import Menus from "./components/Menus";
import Table1 from "./components/Table1";
import Table2 from "./components/Table2";
function Layout() {
    return (
        <div className="row">
            <div className="col-md-2">
                <Menus />
            </div>
            <div className="col-md-10">
                <div className="row">
                    <div className="col-md-6">
                    <Table1 />
                    </div>
                    <div className="col-md-6">
                    <Table2 />
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Layout;
