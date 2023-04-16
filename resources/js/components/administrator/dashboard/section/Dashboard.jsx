import React, { useState, useEffect } from 'react';
import DashboardTable from './components/Table'
import DashboardModal from './components/Modal'

function DashboardSection() {
    return ( 
        <div className="row">
            <div className="col-md-4 mb-3">
                <DashboardModal />
            </div>
            <div className="col-md-9">
            </div>
            <div className="col-md-4">
             <DashboardTable />
            </div>
        </div>
     );
}

export default DashboardSection;