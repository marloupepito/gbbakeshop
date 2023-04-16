import React, { useState,useEffect } from 'react';
import { Input } from 'antd';
import { Col, Row } from 'antd';
import IngredientsCard from './Card';

const IngredientsAutocomplete = (props) => {
const [ingdata,setIngdata] = useState([]);
const [timeCount,setTimeCount] = useState(0);


useEffect(() => {
  setIngdata(props.data)
},[]);

  const handleSearch = (aaa) => {
    const { data } = {
      "data": props.data
    };
    
    setTimeCount(1);

    const keyword = aaa.target.value;
    
    const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase())));
    setIngdata(filtered)
  };
  // const onSelect = (value) => {
   
  // };


  return (
    
    <div>
        <Input.Search
    //   options={options}
    //  onSelect={onSelect}
      onChange={handleSearch} size="large" placeholder="Search Products" enterButton />
      <Row gutter={[16,16]} className="mt-4">
       {
               timeCount === 0?props.data.map(res=>
                <Col key={res.id} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                   <IngredientsCard id={res.id} notify={res.notify} bind={res.bind_name} quantity={res.ingredients_quantity} title={res.ingredients_name} />
                
                </Col>):ingdata.map(res=>
            <Col key={res.id} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
               <IngredientsCard id={res.id} notify={res.notify} bind={res.bind_name}  quantity={res.ingredients_quantity} title={res.ingredients_name} />
            </Col>
               )
            }
            </Row>
    </div>
  );
};
export default IngredientsAutocomplete;