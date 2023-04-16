import React, { useState } from 'react';
import { Button, Modal, Checkbox, Form, Input  } from 'antd';
import { AppNotification } from '../../../../components/Notification';
import { useNavigate } from "react-router-dom";
import { BranchNameParams } from '../../../../routes/Params';
const DashboardModal = () => {
  const navigate = useNavigate();
  const formRef = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notify,setNotify] =useState(false)
  const [loading,setLoading] =useState(false)
  const branchname = BranchNameParams().props.children
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    formRef.current?.resetFields();
  };

  const onFinish = (values) => {
    setLoading(true)
    console.log('Success:', values);
    axios.post('/add_branch',{
      branchName:values.branchName,
      // assignPerson:values.assignPerson,
      // branchPosition:values.branchPosition,
      // username:values.username,
      // password:values.upassword,
    })
    .then(res=>{
      setNotify('success')
      setLoading(false)
      window.location='/administrator/dashboard';
    })
    .catch(err=>{
      setNotify('error')
      setLoading(false)
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    {
      notify ==='success'?<AppNotification type="success" message="Branch successfully created!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
      <Button type="primary" block onClick={showModal}>
        Create Branch
      </Button>
      <Modal title="Create Branch" maskClosable={false} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form
       ref={formRef} 
      layout="vertical"
      name="control-ref"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
   

     
      <Form.Item
        label="Branch Name"
        name="branchName"
        rules={[
          {
            required: true,
            message: 'Please input your Branch Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

    {/*  <Form.Item
        label="Assign Person"
        name="assignPerson"
        rules={[
          {
            required: true,
            message: 'Please input your Assign Person!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Branch Position"
        name="branchPosition"
        rules={[
          {
            required: true,
            message: 'Please input your Branch Position!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input />
      </Form.Item>
*/}

      <Form.Item
      >
        <Button type="primary" loading={loading} className='mt-3 offset-md-9' htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Modal>
    </>
  );
};
export default DashboardModal;
