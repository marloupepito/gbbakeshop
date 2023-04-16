import React, { useState, useEffect } from 'react';
import {  Checkbox, Form, Input,Button, Modal,Select, Tag } from 'antd';
import { BranchNameParams } from '../../../../../routes/Params';
import {SearchBranchId} from '../../../../../routes/Search';
import axios from 'axios'
import { AppNotification } from '../../../../../components/Notification'
import { useNavigate } from "react-router-dom";
const CreateDelivery = () => {

const branchName = BranchNameParams().props.children.replace(/_/g,' ')
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ingredientList, setIngredientList] = useState([]);
  const [form] = Form.useForm();
  const branchid = SearchBranchId().props.children
  const navigate = useNavigate();
  const [notify,setNotify] =useState(false)
  const [loading,setLoading] =useState(false)
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
    axios.post('/send_request_form',{
      branchid:branchid,
      data:values.ingredients
    })
    .then(res=>{
      setNotify('success')
      setTimeout(() => {
        navigate('/administrator/'+branchName+'/loading')  
        setLoading(false)
      }, 1000);
    })
    .catch(err=>{
      setNotify('error')
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    axios.post('/get_branch_ingredients',{
       branchName:branchName
    })
    .then(res=>{
      setIngredientList(res.data.status.map(res=>({value:res.ingredients_name})))
      //  setBranches(res.data.status)
      //  setLoading(false)
    })
 },[]);

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color='cyan'
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };
  
  return (
    <>
     {
      notify ==='success'?<AppNotification type="success" message="Successfully requested!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
      <Button type="primary" className="mb-3" onClick={showModal}>
        Create Request Ingredients
      </Button>
      <Modal maskClosable={false} title="Request Ingredients" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
       form={form}
       layout="vertical"
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Ingredients"
        name="ingredients"
        rules={[
          {
            required: true,
            message: 'Please input ingredients!',
          },
        ]}
      >
        <Select
          mode="multiple"
          showArrow
          tagRender={tagRender}
          style={{
            width: '100%',
          }}
          options={ingredientList}
        />
      </Form.Item>



      <Form.Item
      >
        <Button type="primary" loading={loading} className="mt-3 offset-md-9" htmlType="submit">
          REQUEST
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};
export default CreateDelivery;