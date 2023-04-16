import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  message,
  Select,
} from 'antd';
import { useState,useEffect } from 'react';
import { AppNotification } from '../../../../components/Notification'
import AccountTable from './Table.jsx'
import { BranchNameParams } from '../../../../routes/Params';
import {SearchBranchId} from '../../../../routes/Search';
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const EmployeesForm = () => {
  const [form] = Form.useForm();
  const [branchid,setBranchid] = useState(0);
  const [notify,setNotify] =useState(false)
  const [loading,setLoading] =useState(false)
  const [load,setLoad] =useState(false)
  const branchName = BranchNameParams().props.children.replace(/_/g,' ')
  const branchids = SearchBranchId().props.children
 
  useEffect(() => {
    setLoad(branchName)
     setBranchid(branchids)
},[branchids]);



  const onFinish = (values) => {
    setLoading(true)
    axios.post('/add_account',{
      data:values,
      branchid:branchid
    })
    .then(res=>{
      console.log(res.data.console)
       if(res.data.status === 'success'){
        setNotify('success')
               setLoad(res.data.load)
          setTimeout(() => {
            setLoading(false)
            setNotify(false)
               form.resetFields();
          }, 1500);
       }else{
          setNotify('exist')
          setTimeout(() => {
            setNotify(false)
            setLoading(false)
          }, 1500);
       }
    })
    .catch(err=>{
      setNotify('error')
      setLoading(false)
      form.resetFields();
    })
  };

    const onReset = () => {
    form.resetFields();
  };

 
  return (
    <div className="row">
       {
      notify ==='success'?<AppNotification type="success" message="Registration Successfully" />
      :notify ==='error'?<AppNotification type="error" message="Error!" />
      :notify ==='exist'?<AppNotification type="warning" message="Username is already exist!" />:''
    }
    <div className="col-md-4"> 
        <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      
      style={{
        maxWidth: 600,
      }}
      scrollToFirstError
    >

      <Form.Item
        name="name"
        label="Fullname"
        rules={[
          {
            required: true,
            message: 'Please input fullname',
          },
        ]}
      >
        <Input  className="mb-1" />
      </Form.Item>

       <Form.Item
        name="shift"
        label="Shift"
        rules={[
          {
            required: true,
            message: 'Please select Shift!',
          },
        ]}
      >
        <Select className="mb-1" placeholder="select Shift">
          <Option value="AM">AM</Option>
          <Option value="PM">PM</Option>
        </Select>
      </Form.Item>


     <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: 'Please input Username!',
          },
        ]}
        hasFeedback
      >
        <Input  className="mb-1"/>
      </Form.Item>


      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password  className="mb-1"/>
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password  className="mb-1"/>
      </Form.Item>


   

      <Form.Item
        name="mobile"
        label="Mobile Number"
        rules={[
          {
            required: true,
            message: 'Please input mobile number!',
          },
        ]}
      >
        <Input
        className="mb-1"
          addonBefore={'+63'}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

    
      <Form.Item
        name="gender"
        label="Gender"
        rules={[
          {
            required: true,
            message: 'Please select gender!',
          },
        ]}
      >
        <Select className="mb-1" placeholder="select gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>


        <Form.Item
        name="position"
        label="Position"
        rules={[
          {
            required: true,
            message: 'Please select Position!',
          },
        ]}
      >
        <Select className="mb-5" placeholder="select Position">
        <Option value="Supervisor">Supervisor</Option>
          <Option value="Chief Baker">Chief Baker</Option>
          <Option value="Baker">Baker</Option>
          <Option value="Cashier">Cashier</Option>
          <Option value="Sales Lady">Sales Lady</Option>
          <Option value="Lamesador">Lamesador</Option>
          <Option value="Hornero">Hornero</Option>
        </Select>
      </Form.Item>

 

     
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" loading={loading} danger htmlType="submit">
          Register
        </Button>&nbsp;&nbsp;
         <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
    </div>
    <div className="col-md-8">
             <AccountTable load={load} branchid={branchids}/>
         </div>
    </div>
  );
};
export default EmployeesForm;