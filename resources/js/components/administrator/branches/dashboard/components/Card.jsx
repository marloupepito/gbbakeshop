import React, { useState, useEffect } from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
function CardComponents(props) {
    return ( 
        <Row gutter={16}>
            <Col span={8}>
                    <Card className="card" title="Total Income" bordered={false}>
                        <Statistic
                            value={props.sales.map(es=>parseFloat(es.sales)).reduce((partialSum, a) => partialSum + a, 0)}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix="₱"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card" title="Total Expenses" bordered={false}>
                        <Statistic
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className="card" title="Total Profits" bordered={false}>
                        <Statistic
                            value={11.28}
                            precision={2}
                            valueStyle={{ color: "#3f8600" }}
                            prefix={<ArrowUpOutlined />}
                            suffix="%"
                        />
                    </Card>
                </Col>
        </Row>
     );
}

export default CardComponents;