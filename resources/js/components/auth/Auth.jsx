import React, { useState, useEffect } from "react";
import { Button, Result, Form, Input, Skeleton } from "antd";
import { WarningTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Auth() {
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/api/user")
            .then((res) => {
                if (window.location.pathname === "/") {
                    if (res.data.position === "admin") {
                        navigate("/administrator/dashboard");
                        setLoading2(false);
                    } else {
                        navigate(
                            "/branch/" +
                                localStorage
                                    .getItem("branch")
                                    .replace(/ /g, "_") +
                                "/ingredients"
                        );
                    }
                }
            })
            .catch((err) => {
                setLoading2(false);
            });
    }, []);

    const onFinish = (values) => {
        setError(false);
        setLoading(true);
        // history("/administrator");

        axios
            .post("/user_login", {
                username: values.username,
                password: values.password,
            })
            .then((res) => {
                console.log(res.data.user)
                localStorage.setItem("user", JSON.stringify(res.data.user));
                if (
                    res.data.status === "success" &&
                    res.data.user.position !== "admin"
                ) {
                    navigate(
                        "/branch/" +
                            res.data.branch.branch_name.replace(/ /g, "_") +
                            "/ingredients"
                    );
                    localStorage.setItem("position", res.data.user.position);
                    localStorage.setItem("branch", res.data.branch.branch_name);
                    localStorage.setItem("id", res.data.branch.id);
                    setLoading(false);
                } else if (
                    res.data.status === "success" &&
                    res.data.user.position === "admin"
                ) {
                    navigate("/administrator/dashboard");
                    localStorage.setItem("position", "admin");
                    localStorage.setItem("username", res.data.user.username);
                    setLoading(false);
                } else {
                    setError(res.data.user.position);
                    setLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setError("Incorrect password or username!");
                setLoading(false);
            });
    };

    const onFinishFailed = (errorInfo) => {
        // console.log('Failed:', errorInfo);
        // setLoading(true)
        //  navigate("/administrator");
    };
    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            
        >
            <Skeleton loading={loading2}>
               
    <div className="container offset-md-3 ">
        <div className="row">
            <div className="col-lg-7 col-md-offset-2 col-md-8">
                <div className="form-container">
                    <div className="form-icon">
                        <i className="fa fa-user-circle"></i>
                        <h6 className="title text-white">GB BAKESHOP</h6>
                        <p><b><u>ATTENDANCE</u></b></p>
                    </div>
                    <div className="form-horizontal">
                    <h5 className="title text-black">LOGIN FORM</h5>
                    <Form
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        layout="vertical"
                                    >
                                        <p className="text-danger">
                                            {error !== null ? error : ""}
                                        </p>
                                        <Form.Item
                                            label="Username"
                                            name="username"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your username!",
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
                                                    message:
                                                        "Please input your password!",
                                                },
                                            ]}
                                        >
                                            <Input.Password />
                                        </Form.Item>
                                        <br />  <br />
                                        <Form.Item>
                                            <Button
                                                loading={loading}
                                                className="mt-4"
                                                block
                                                type="primary"
                                                danger
                                                htmlType="submit"
                                            >
                                                LOGIN
                                            </Button>
                                        </Form.Item>
                                    </Form>
                    </div>
                </div>
            </div>
        </div>
    </div>
            </Skeleton>
        </div>
    );
}

export default Auth;
