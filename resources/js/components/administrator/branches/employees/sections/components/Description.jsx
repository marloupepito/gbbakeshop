import React, { useState, useEffect } from "react";
import { Descriptions } from "antd";

function Description(props) {
    useEffect(() => {
        // console.log("waa", props.user);
    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 mt-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center text-center">
                                <img
                                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                    alt="Admin"
                                    className="rounded-circle"
                                    width="150"
                                />
                                <div className="mt-3 text-capitalize">
                                    <h4>{props.user.name}</h4>
                                    <p className="text-secondary mb-1">
                                        {props.user.position}
                                    </p>
                                    <p className="text-muted font-size-sm">
                                        {props.user.gender}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 mt-3">
                    <div className="card mb-3">
                        <div className="card-body text-capitalize">
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Full Name</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {props.user.name}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Mobile</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {props.user.mobile}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Username</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {props.user.username}
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Shift</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    { props.user.shift }
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-sm-3">
                                    <h6 className="mb-0">Position</h6>
                                </div>
                                <div className="col-sm-9 text-secondary">
                                    {props.user.position}
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Description;
