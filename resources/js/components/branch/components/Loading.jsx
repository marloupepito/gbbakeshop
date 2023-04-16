import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function AppLoading() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate(-1)
    }, []);
    return ( 
        <>
        Loading...</>
     );
}

export default AppLoading;