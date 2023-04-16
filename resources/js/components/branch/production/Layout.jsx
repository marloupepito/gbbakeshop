import React, { useState, useEffect } from 'react';
import ProductionTabs from './components/Tabs';
import { Get_all_production } from '../api/Production';

function ProductionLayout() {
 
    return ( 
        <>
            <ProductionTabs production={Get_all_production}/>
        </>
     );
}

export default ProductionLayout;