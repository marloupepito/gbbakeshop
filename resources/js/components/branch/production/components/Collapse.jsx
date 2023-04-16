import React from 'react';
import { Card, Col, Row } from 'antd';
import { Collapse } from 'antd';
import ProductionModal from './Modal';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const ProductionCollapse = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <Row gutter={[16,16]}>
    <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
           <ProductionModal />
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
           {/* <IngredientsAutocomplete data={get_branch_ingredients().props.children} /> */}
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}<br />
                <button>ADD PRODUCTION.</button>
                </p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
             <Collapse onChange={onChange}>
            <Panel header="Pandesal101" key="1">
                <p>{text}</p>
            </Panel>
            </Collapse>
        </Col>
    </Row>
 
  );
};
export default ProductionCollapse;