import React, { useState, useEffect } from 'react';
import { Col, Row,Button,Skeleton,Input  } from 'antd';
import CodeModal from '../components/Modal';
import { Get_all_production } from '../../api/Production';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../routes/Params';
import { SearchBranchId } from '../../../routes/Search';
import ProductionSectionDrawer from './components/Drawer';
function CreateSection() {
    const navigate = useNavigate();
    const branchName =BranchNameParams().props.children
    const branchId =SearchBranchId().props.children
    const [data,setData] = useState([])
    const [data2,setData2] = useState([])
    const [loading,setLoading] = useState(true)
    const [timeCount,setTimeCount] = useState(0);

    function goToForm(){
        navigate('/branch/'+branchName+'/production/create/form?branch_id='+branchId);
    }
  

    useEffect(() => {
        axios.post('/get_all_production',{
          id:branchId
          })
          .then(res=>{
               setData(Object.values(res.data.status))
               setData2(Object.values(res.data.status))
            setLoading(false)
          })
      }, []);


  const handleSearch = (aaa) => {
    // const { datas } = {
    //   "data": data
    // };
      setTimeCount(1);

    const keyword = aaa.target.value;
    
    const filtered = data2.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase())));
    setData(filtered)
  };

    return ( 
        <Row gutter={[16,16]}>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
          {/* <Button onClick={goToForm} type="primary" block>Production Code</Button> */}
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <Input.Search
                     onChange={handleSearch} size="large" placeholder="Search Products" enterButton />
               {/* <IngredientsAutocomplete data={get_branch_ingredients().props.children} /> */}
            </Col>
            <Skeleton loading={loading}>
            {
            data === undefined?[]:
            data.map(res =>(
                    <Col key={res.id} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                            <CodeModal data={res}/>
                    </Col>
                ))
            }
            </Skeleton>
        </Row>
     );
}

export default CreateSection;