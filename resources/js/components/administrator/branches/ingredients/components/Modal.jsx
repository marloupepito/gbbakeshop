import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Form, Input, Select,InputNumber } from 'antd';
import { SearchBranchId } from '../../../../routes/Search';
import { BranchNameParams } from '../../../../routes/Params';
import { useNavigate } from "react-router-dom";
import { AppNotification } from '../../../../components/Notification'
const { Option } = Select;

const IngredientsModal = () => {
  const [notify,setNotify] =useState(false)
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const branchid = SearchBranchId().props.children
  const branchname = BranchNameParams().props.children
  const [loading, setLoading] = useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };


  const onFinish = (values) => {
    setLoading(true)
    axios.post('/make_branch_ingredients',{
      branchid:branchid,
      data:values
    })
    .then(res=>{
      setNotify('success')
      setTimeout(() => {
        setLoading(false)
        navigate('/administrator/'+branchname+'/loading')
      }, 1000);
    })
    .catch(err=>{
      setNotify('error')
      setLoading(false)
      form.resetFields();
    })
    
  };

  return (
    <>
     {
      notify ==='success'?<AppNotification type="success" message="Product code has been genarated!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
      <Button block size="large" type="primary" onClick={showModal}>
        Create Raw Materials
      </Button>
      <Modal title="Create Ingredients" open={isModalOpen} onOk={handleOk} type="primary" className='mr-3' htmlType="submit" onCancel={handleCancel}>
      <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        name="product"
        label="Product Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
        
      <Form.Item
          name="bundle"
          label="Bundle"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            placeholder="select bundle type"
            // onChange={this.onGenderChange}
            allowClear
          >
            <Option value="Kilo">Kilo</Option>
            <Option value="Pcs">Pcs</Option>
          </Select>
        </Form.Item>
     
     <Form.Item
        name="notification"
        label="Notification Alert"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type="number"/>
      </Form.Item>

        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <InputNumber style={{width:'100%'}} placeholder="Input Quantity"/>
        </Form.Item>

    

      <Form.Item >
        <Button type="primary" className='mt-3' loading={loading} block htmlType="submit">
          Submit
        </Button>
      
      </Form.Item>
    </Form>
      </Modal>

   
    </>
  );
};
export default IngredientsModal;