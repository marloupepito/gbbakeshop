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
        // axios
        //     .get("/user")
        //     .then((res) => {
        //         if (window.location.pathname === "/") {
        //             if (res.data.position === "admin") {
        //                 navigate("/administrator/dashboard");
        //                 setLoading2(false);
        //             } else {
        //                 navigate(
        //                     "/branch/" +
        //                         localStorage
        //                             .getItem("branch")
        //                             .replace(/ /g, "_") +
        //                         "/ingredients"
        //                 );
        //             }
        //         }
        //     })
        //     .catch((err) => {
        //         setLoading2(false);
        //     });
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
                backgroundColor: " #ff4d4d",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
            
        >
            <Skeleton loading={loading2}>
                <div className="container offset-md-3" >
                    <div className="card col-md-8">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="h-100  justify-content-center align-items-center">
                                    <img
                                        src="/images/logo.png"
                                        style={{ borderRadius: "10px" }}
                                        width="100%"
                                        className="col-md-10 offset-md-1 mt-3"
                                    />
                                    <Form
                                        className="col-md-10 offset-md-1"
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

                                        <Form.Item>
                                            <Button
                                                loading={loading}
                                                className="mt-4"
                                                block
                                                type="primary"
                                                danger
                                                htmlType="submit"
                                            >
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="right-side-content">
                                    <div className="content d-flex flex-column">
                                        <h6>Explore you activity</h6>
                                        <span>
                                            sed do eiusmod tempor incididunt ut
                                            labore et dolore magna aliqua
                                        </span>
                                    </div>
                                    <div className="right-side">
                                        <span></span> <span></span>
                                        <span></span> <span></span>
                                        <span>
                                            <img src="/images/baker1.png" />
                                        </span>
                                        <span></span> <span></span>
                                        <span></span>
                                        <span>
                                            <img src="/images/baker2.jpg" />
                                        </span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="parallelogram">
                        <span></span>
                        <span></span> <span></span>
                    </div>
                </div>
            </Skeleton>
        </div>
    );
}

export default Auth;
