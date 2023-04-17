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
                console.log(res.data.user);
                localStorage.setItem("user", JSON.stringify(res.data.user));
                if (
                    res.data.status === "success" &&
                    res.data.user.position !== "admin"
                ) {
                    // navigate(
                    //     "/branch/" +
                    //         res.data.branch.branch_name.replace(/ /g, "_") +
                    //         "/ingredients"
                    // );
                    localStorage.setItem("position", res.data.user.position);
                    localStorage.setItem("branch", res.data.branch.branch_name);
                    localStorage.setItem("branchid", res.data.user.branch_id);
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
                <div className="container">
                    <div className="row d-flex justify-content-center mt-5">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card py-3 px-2">
                                <p className="text-center mb-3 mt-2">
                                    <h3><b>GB BAKESHOP</b></h3>
                                </p>
                                <div className="row mx-auto ">
                                    <div className="col-4">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="col-4">
                                        <i className="fab fa-facebook"></i>
                                    </div>
                                    <div className="col-4">
                                        <i className="fab fa-google"></i>
                                    </div>
                                </div>
                                <div className="division mb-5">
                                    <div className="row">
                                        <div className="col-3">
                                            <div className="line l"></div>
                                        </div>
                                        <div className="col-3">
                                            <div className="line r"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="myform">
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
                                        <br /> <br />
                                        <div className="row">
                                            <div className="col-md-6 col-12">
                                                {/* <div className="form-group form-check">
    							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
    							<label className="form-check-label" for="exampleCheck1">Rester connecte</label>
  							</div> */}
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <Form.Item>
                                                <Button
                                                    loading={loading}
                                                    block
                                                    type="primary"
                                                    danger
                                                    htmlType="submit"
                                                >
                                                    LOGIN
                                                </Button>
                                            </Form.Item>
                                        </div>
                                    </Form><br />
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
