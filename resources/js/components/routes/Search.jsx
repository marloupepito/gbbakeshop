import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";
export function SearchBranchId(props) {
    let [searchParams, setSearchParams] = useSearchParams();
    
    const value = searchParams.get('branch_id')
    useEffect(() => {
      if(localStorage.getItem("position") === 'admin'){
            setSearchParams(value === null?'branch_id=main':'branch_id='+value)
             sessionStorage.setItem("branchid", value);
        }else{
            const user = localStorage.getItem("id")
            
            setSearchParams('branch_id='+user)
        }
    }, []);
 
    return ( 
        <>
       {value}
        </>
     );
}

