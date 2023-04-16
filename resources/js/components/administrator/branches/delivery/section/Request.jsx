import React, { useState, useEffect } from 'react';
import DeliveryTable1 from './components/Table1'
import CreateDelivery from './components/Modal'
function RequestSection() {
    return ( 
        <>
        <CreateDelivery />
        <DeliveryTable1 />
        </>
     );
}

export default RequestSection;