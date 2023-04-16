import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Statistic } from "antd";
import SegmentedComponents from "./components/Segmented";
import Description from "./components/Descriptions";
import LineChart from "./components/LineChart";
import CardComponents from "./components/Card";
import { useSearchParams,useParams } from "react-router-dom";
function Layout() {
    let [searchParams, setSearchParams] = useSearchParams();
    const branch_id = searchParams.get('branch_id')
    let { periodical } = useParams();
    const [data,setData] = useState([])
    useEffect(() => {
       axios.get('/api/get_branch_dashboard/'+branch_id+'/'+periodical)
       .then(res=>{
        setData(res.data.status)
       })
    }, [periodical]);

    return (
        <>
            <Row gutter={16}>
                <Col span={24}>
                    <SegmentedComponents />
                </Col>
                <Col span={24}>
                <CardComponents sales={data}/>
                </Col>
               
               
                <Col span={24}>
                    <div className="card mt-3">
                    <Description />
                    </div>
                  
                </Col>
                <Col span={24}>
                    <div
                    className="card mt-3"
                        style={{
                            position: "relative",
                            marginBottom: "1%",
                            padding: "1%",
                        }}
                    >
                        <LineChart sales={data}  />
                    </div>
                </Col>
            </Row><br />
        </>
    );
}

export default Layout;
