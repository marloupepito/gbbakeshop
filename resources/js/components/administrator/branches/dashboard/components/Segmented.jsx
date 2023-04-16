import React, { useState, useEffect } from "react";
import { Segmented, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function SegmentedComponents() {
    let [searchParams, setSearchParams] = useSearchParams();
    const [seg,setSeg] = useState('Daily')
    const branch_id = searchParams.get('branch_id')
    const navigate = useNavigate();
    function nextPeriodical(e){
        const where = e.charAt(0).toLowerCase() + e.slice(1)
        const branch_name = window.location.pathname.split('/')[2]
        setSeg(where)
     navigate('/administrator/'+branch_name+'/'+where+"?branch_id="+branch_id)
    }
    return (
        <Space direction="vertical" className="mb-3">
            <Segmented
                  onChange={nextPeriodical}
                size="large"
                options={["Daily", "Weekly", "Monthly", "Quarterly", "Yearly"]}
            />
         
        </Space>
    );
}

export default SegmentedComponents;
