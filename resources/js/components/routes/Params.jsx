import React  from 'react';
import { useParams } from 'react-router-dom';

export function BranchNameParams() {
    let { id } = useParams();
    return ( 
        <>
        {id}
        </>
     );
}
