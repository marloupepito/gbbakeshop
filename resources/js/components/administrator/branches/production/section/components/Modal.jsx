import React, { useState, useEffect } from 'react';
import { Button, Modal, Checkbox, Form, Input,InputNumber   } from 'antd';
import { SearchBranchId } from '../../../../../routes/Search';
import { AppNotification } from '../../../../../components/Notification';
import { BranchNameParams } from '../../../../../routes/Params';
import { useNavigate } from "react-router-dom";
import moment from 'moment'
const { TextArea } = Input;

export function ModalSoldOut(props) {
    const [form] = Form.useForm();
    const branchId =SearchBranchId().props.children
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [breadout, setBreadout] = useState(0);
   // const [charge, setCharge] = useState(0);
    const [remaining, setRemaining] = useState(0);
    const [notify,setNotify] =useState(false)
    const branchname = BranchNameParams().props.children
    
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


    useEffect(() => {
 //console.log(moment().format('LL'))
}, []);

    const onFinish = (values) => {
      setLoading(true)
      const remaining= values.remaining
        axios.post('/add_bread_branch_sold',{
          breadid:props.data[0],
          branchid:branchId,
          remaining:values.remaining,
          remarks:values.remarks,
          // charge:values.charge,
          assigned:JSON.parse(localStorage.getItem("user")).name,
          breadout:values.breadout,
          date:moment().format('MMMM DD, YYYY A')
        })
        .then(res=>{
          setNotify('success')
          setTimeout(() => {
            navigate('/administrator/'+branchname+'/loading')
            setLoading(false)
          }, 1000);
        })
        .catch(err=>{
          setLoading(false)
          setNotify('error')
        })
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };



const remainingHandler =(e)=>{
    setRemaining(e.target.value)
}
    

const breadoutHandler =(e)=>{
   setBreadout(e.target.value) 
}
     
    return ( 
        <>
        {
      notify ==='success'?<AppNotification type="success" message="Production has been added!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
        <Button block type="primary" disabled={props.data[5] === null?true:false} ghost size="small" onClick={showModal}>
            Remaining
        </Button>
        <Modal title={props.data[1]+' '+props.data[2] +'pcs'} open={isModalOpen} onOk={handleOk} maskClosable={false} onCancel={handleCancel}>
   
            <Form
            form={form}
                    layout="vertical" 
                    name="basic"
                    initialValues={{
                        remaining: 0,
                        breadout: 0,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
            >
                    <Form.Item
                        label="Remaining"
                        name="remaining"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the remaining!',
                        },
                        ]}
                    >
                        <Input type="number" onChange={remainingHandler}/>
                    </Form.Item>

                     <Form.Item
                        label="Bread Out"
                        name="breadout"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the Bread Out!',
                        },
                        ]}
                    >
                        <Input type="number" onChange={breadoutHandler}/>
                    </Form.Item>

                    <Form.Item
                        label="Remarks"
                        name="remarks"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the remarks!',
                        },
                        ]}
                    >
                        

                     <TextArea rows={3} className="mt-2" placeholder="Remarks" maxLength={191} />
      
                    </Form.Item>


             {/*        <Form.Item
                        label="Charge/pcs"
                        name="charge"
                        rules={[
                        {
                            required: true,
                            message: 'Please input the Charge!',
                        },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>*/}

                    <Form.Item
                    >
                        <Button disabled={ parseInt(remaining) > parseInt(props.data[2]) || parseInt(breadout) > parseInt(props.data[2])?true:false } loading={loading} type="primary" className='mt-3' block htmlType="submit">
                        SUBMIT
                        </Button>
                    </Form.Item>
                    </Form>
        </Modal>
        </>
     );

}

