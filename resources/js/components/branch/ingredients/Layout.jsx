import React, { useState, useEffect } from 'react';
import {  Col, Row,Skeleton  } from 'antd';
import IngredientsModal from './components/Modal';
import IngredientsAutocomplete from './components/Autocomplete';
import { BranchNameParams } from '../../routes/Params';


function IngredientsLayout() {
   const [branches,setBranches] = useState([])
   const [loading,setLoading] = useState(true)
   const branchName = BranchNameParams().props.children.replace(/_/g,' ')

      useEffect(() => {
         axios.post('/get_branch_ingredients',{
            branchName:branchName
         })
         .then(res=>{
            setBranches(res.data.status)
            setLoading(false)
         })
      },[branchName]);
    return ( 
        <div>
        <Row gutter={[16,16]}>
            {/* <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={6}>
               <IngredientsModal />
            </Col> */}
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
               <Skeleton loading={loading}>
               <IngredientsAutocomplete data={branches} />
               </Skeleton>
            </Col>
        </Row>
        </div>
     );
}

export default IngredientsLayout;