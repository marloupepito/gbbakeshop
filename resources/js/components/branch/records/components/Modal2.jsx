import React, { useState, useEffect } from "react";
import moment from "moment";
import { Button, Form, Input,  Modal,Radio } from "antd";
import { message, Upload } from "antd";
import { SearchBranchId } from "../../../routes/Search";
import { useLocation,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const { Dragger } = Upload;
const { TextArea } = Input;

function Modal2() {
    let { dates } = useParams();
    const hash  = useLocation();
    const navigate = useNavigate();
    const branch_id = SearchBranchId().props.children;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [type, setType] = useState('Charge');
    const [form] = Form.useForm();

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
        let fd = new FormData()
      
       fd.append('name',values.name); 
       fd.append('type',type); 
       fd.append('description',values.description); 
       fd.append('amount',values.amount); 
       fd.append('branch_id',branch_id); 
       fd.append('date',dates.replace(/-/g,' ').replace('.',',')); 
       fd.append('userid', JSON.parse(localStorage.getItem("user")).id); 
        axios.post('/create_credit_or_charge',fd)
        .then(res=>{
            message.success(type+' successfully added!');
            setIsModalOpen(false);
            form.resetFields();
            navigate(hash.pathname+hash.search+'#'+Math.floor(Math.random() * 100000));
            setLoading(false)
        })
    };
    const onReset = () => {
        form.resetFields();
    };

    const onChange = (e) => {
        setType(e.target.value);
      };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Credits
            </Button>
            <Modal
                maskClosable={false}
                title={"Add expenses on " + moment().format("LLL")}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form
                    layout="vertical"
                    form={form}
                    name="control-hooks"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                >
                 <Radio.Group onChange={onChange} value={type}>
                    <Radio value='Charge'>Charge</Radio>
                    <Radio value='Credits'>Credits</Radio>
                    </Radio.Group>

                    <Form.Item
                        name="name"
                        label="Name of Employee"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="amount"
                        label="Amount"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input type="number" />
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "Please input the Description!",
                            },
                        ]}
                    >
                        <TextArea
                            rows={3}
                            className="mt-2"
                            placeholder="Description"
                            maxLength={191}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                        loading={loading}
                            type="primary"
                            block
                            className="mt-3"
                            htmlType="submit"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default Modal2;
