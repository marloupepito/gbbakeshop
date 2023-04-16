import React, { useState, useEffect } from "react";
import moment from "moment";
import { Button, Form, Input,  Modal } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import { SearchBranchId } from "../../../routes/Search";
import { useLocation,useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const { Dragger } = Upload;
const { TextArea } = Input;

function Modal1() {
    let { dates } = useParams();
    const hash  = useLocation();
    const navigate = useNavigate();
    const branch_id = SearchBranchId().props.children;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

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
       for (let i = 0; i < values.images.fileList.length; i++) {
        const element = values.images.fileList[i];
        fd.append('images'+i,element.originFileObj); 
       }
       fd.append('name',values.name); 
       fd.append('description',values.description); 
       fd.append('amount',values.amount); 
       fd.append('length',values.images.fileList.length); 
       fd.append('branchid',branch_id); 
       fd.append('date',dates.replace(/-/g,' ').replace('.',',')); 
       fd.append('userid', JSON.parse(localStorage.getItem("user")).id); 
        axios.post('/add_branch_expenses',fd)
        .then(res=>{
            message.success('Expenses successfully added!');
            setIsModalOpen(false);
            form.resetFields();
            navigate(hash.pathname+hash.search+'#'+Math.floor(Math.random() * 100000));
            setLoading(false)
        })
    };
    const onReset = () => {
        form.resetFields();
    };

    const props = {
        name: "images",
        multiple: true,
        method:'GET',
        accept:'image/*',
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        onChange(info) {
            const { status } = info.file;
            if (status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (status === "done") {
                message.success(
                    `${info.file.name} file uploaded successfully.`
                );
            } else if (status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onDrop(e) {
            console.log("Dropped files", e.dataTransfer.files);
        },
    };
  
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Add Expenses
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
                    <Form.Item
                        name="images"
                        label="Images"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">
                                Click or drag file to this area to upload
                            </p>
                            <p className="ant-upload-hint">
                               Please upload the receipt(s) on this day.
                            </p>
                        </Dragger>
                    </Form.Item>

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

export default Modal1;
