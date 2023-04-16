import React, { useState, useEffect } from 'react';
import {  Checkbox, Form, InputNumber ,Button, Modal } from 'antd';
import { AppNotification } from '../../../../components/Notification';
import { BranchNameParams } from '../../../../routes/Params';
import { useNavigate } from "react-router-dom";
function AcceptRequestIngredients(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [notify,setNotify] =useState(false)
    const branchname = BranchNameParams().props.children
    const navigate = useNavigate();
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
        if(props.show !== false){
            axios.post('/get_ingredients_list',{
                branchid:props.show[2],
                requestid:props.show[3],
            })
            .then(res=>{
                setIsModalOpen(props.show[1])
                setData(res.data.status)
            })
        }
    }, [props.show[0]]);

    const onFinish = (values) => {
      setLoading(true)

        axios.post('/accept_request_ingredients',{
          key:data.map(res=>res.key),
          quantity:Object.values(values),
          response:'Delivered',
          requestid:data[0].request_id,
          branchid:props.show[2]
        })
        .then(res=>{
          setNotify('success')
          setTimeout(() => {
            navigate('/branch/'+branchname+'/loading')
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
    return ( 
        <>
        {
      notify ==='success'?<AppNotification type="success" message="Request accepted successfully!"/>:notify ==='error'?<AppNotification type="error" message="Error!"/>:""
    }
        <Modal title="Accept Ingredients" open={isModalOpen} onCancel={handleCancel}>
        <Form
        layout="vertical"
        name="control-hooks"
     
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

        {
            data.map(res=>(
            <div  key={res.key}>
                <Form.Item
                    
                    label={'Quantity of '+res.ingredients_name}
                    name={'quantity'+[res.key]}
                    rules={[
                    {
                        required: true,
                        message: 'Please input Quantity of '+ res.ingredients_name,
                    },
                    ]}
                >
                    <InputNumber style={{width:'100%'}} />
                </Form.Item>
            </div>
            ))
        }
      

      <Form.Item
      >
        <Button type="primary" loading={loading} className="mt-3 offset-md-9" htmlType="submit">
          ACCEPT
        </Button>
      </Form.Item>
    </Form>

        </Modal>
        </>
     );
}

export default AcceptRequestIngredients;