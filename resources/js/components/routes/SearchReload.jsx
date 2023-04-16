import React, { useState, useEffect } from 'react';
export function SearchBranchIdReload(reload) {
     let [searchParams, setSearchParams] = useState();

     setSearchParams(reload)
     
    return ( 
        <>
       {searchParams}
        </>
     );
}

