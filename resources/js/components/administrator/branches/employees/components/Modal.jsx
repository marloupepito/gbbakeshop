import React, { useState, useEffect } from "react";
import { Button, Modal } from "antd";
import { Form, Input, Select, InputNumber } from "antd";
import { SearchBranchId } from "../../../../routes/Search";
import { BranchNameParams } from "../../../../routes/Params";
import { useNavigate } from "react-router-dom";
import { DownOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { AppNotification } from "../../../../components/Notification";
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

const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

const EditAccount = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [branchid, setBranchid] = useState(0);
    const [notify, setNotify] = useState(false);
    const [loading, setLoading] = useState(false);
    const [load, setLoad] = useState(false);
    const [data, setData] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const branchName = BranchNameParams().props.children.replace(/_/g, " ");
    const branchids = SearchBranchId().props.children;
    const [branches, setBranches] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const filteredOptions = branches.filter((o) => !selectedItems.includes(o));

    useEffect(() => {
        setLoad(branchName);
        setBranchid(branchids);
        axios.post("/get_all_branch").then((res) => {
            setBranches(res.data.status.map(aaa=>aaa.branch_name));
        });
    }, [branchids]);

    const showModal = (id) => {
        axios
            .post("/get_every_account", {
                id: id,
            })
            .then((res) => {
                setIsModalOpen(true);
                setData(res.data.status);
            });
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = (values) => {
        setLoading(true);
        axios
            .put("/update_account", {
                data: values,
                id: data.id,
            })
            .then((res) => {
                if (res.data.status === "success") {
                    setNotify("success");
                    setLoad(res.data.load);
                    setTimeout(() => {
                        navigate("/administrator/" + branchName + "/loading");
                        setLoading(false);
                        setNotify(false);
                        form.resetFields();
                    }, 1000);
                } else {
                    setNotify("exist");

                    setTimeout(() => {
                        setNotify(false);
                        setLoading(false);
                    }, 1000);
                }
            })
            .catch((err) => {
                setNotify("error");
                setLoading(false);
                form.resetFields();
            });
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <>
            {notify === "success" ? (
                <AppNotification
                    type="success"
                    message="Product code has been genarated!"
                />
            ) : notify === "error" ? (
                <AppNotification type="error" message="Error!" />
            ) : (
                ""
            )}

            <Button type="link" onClick={() => showModal(props.id)}>
                <EditOutlined style={{ fontSize: "20px" }} />
            </Button>
            <Modal
                title="Edit Account"
                maskClosable={false}
                open={isModalOpen}
                onOk={handleOk}
                type="primary"
                className="mr-3"
                htmlType="submit"
                onCancel={handleCancel}
            >
                <div className="row">
                    {notify === "success" ? (
                        <AppNotification
                            type="success"
                            message="Registration Successfully"
                        />
                    ) : notify === "error" ? (
                        <AppNotification type="error" message="Error!" />
                    ) : notify === "exist" ? (
                        <AppNotification
                            type="warning"
                            message="Username is already exist!"
                        />
                    ) : (
                        ""
                    )}
                    <div className="col-md-12">
                        <Form
                            {...formItemLayout}
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            initialValues={{
                                id: data.id,
                                name: data.name,
                                branch:branchName,
                                shift: data.shift,
                                username: data.username,
                                mobile: data.mobile,
                                gender: data.gender,
                                position: data.position,
                                password: null,
                                confirm: null,
                            }}
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
                                        message: "Please input fullname",
                                    },
                                ]}
                            >
                                <Input className="mb-1" />
                            </Form.Item>
                            <Form.Item
                                name="branch"
                                label="Branches"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select branch!",
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Please select branch!"
                                    value={selectedItems}
                                    onChange={setSelectedItems}
                                    style={{
                                        width: "100%",
                                    }}
                                    options={filteredOptions.map((item) => ({
                                        value: item,
                                        label: item,
                                    }))}
                                />
                            </Form.Item>
                            <Form.Item
                                name="shift"
                                label="Shift"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select Shift!",
                                    },
                                ]}
                            >
                                <Select
                                    className="mb-1"
                                    placeholder="select Shift"
                                >
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
                                        message: "Please input Username!",
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input className="mb-1" />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                label="Password"
                                hasFeedback
                            >
                                <Input.Password className="mb-1" />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={["password"]}
                                hasFeedback
                                rules={[
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (
                                                !value ||
                                                getFieldValue("password") ===
                                                    value
                                            ) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(
                                                new Error(
                                                    "The two passwords that you entered do not match!"
                                                )
                                            );
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password className="mb-1" />
                            </Form.Item>

                            <Form.Item
                                name="mobile"
                                label="Mobile Number"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input mobile number!",
                                    },
                                ]}
                            >
                                <Input
                                    className="mb-1"
                                    addonBefore={"+63"}
                                    style={{
                                        width: "100%",
                                    }}
                                />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please select gender!",
                                    },
                                ]}
                            >
                                <Select
                                    className="mb-1"
                                    placeholder="select gender"
                                >
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
                                        message: "Please select Position!",
                                    },
                                ]}
                            >
                                <Select
                                    className="mb-5"
                                    placeholder="select Position"
                                >
                                    <Option value="Supervisor">
                                        Supervisor
                                    </Option>
                                    <Option value="Chief Baker">
                                        Chief Baker
                                    </Option>
                                    <Option value="Baker">Baker</Option>
                                    <Option value="Cashier">Cashier</Option>
                                    <Option value="Sales Lady">
                                        Sales Lady
                                    </Option>
                                    <Option value="Lamesador">Lamesador</Option>
                                    <Option value="Hornero">Hornero</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button
                                    style={{ float: "right" }}
                                    type="primary"
                                    loading={loading}
                                    danger
                                    htmlType="submit"
                                >
                                    Update
                                </Button>
                                &nbsp;&nbsp;
                                {/* <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>*/}
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Modal>
        </>
    );
};
export default EditAccount;
