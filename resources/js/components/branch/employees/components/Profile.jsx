import React, { useState, useEffect } from "react";
import { Skeleton } from 'antd';
function Profile() {
    const [data, setData] = useState('large');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/user')
        .then(res=>{
            setData(res.data)
            setLoading(false)
        })    
    }, []);


    return (
        <Skeleton loading={loading} size="large" style={{height:'40vh'}}>
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
                                <h4>{data.name}</h4>
                                <p className="text-secondary mb-1">
                                   {data.position}
                                </p>
                                <p className="text-muted font-size-sm">
                                {data.gender}
                                </p>
                                {/* <button className="btn btn-danger">Follow</button>
                                &nbsp;&nbsp;
                                <button className="btn btn-outline-primary">
                                    Message
                                </button> */}
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
                                {data.name}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Mobile</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {data.mobile}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Username</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {data.username}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Shift</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {data.shift}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-sm-3">
                                <h6 className="mb-0">Position</h6>
                            </div>
                            <div className="col-sm-9 text-secondary">
                            {data.position}
                            </div>
                        </div>
                        <hr />
                        {/* <div className="row">
                            <div className="col-sm-12">
                                <a
                                    className="btn btn-danger "
                                    target="__blank"
                                    href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills"
                                >
                                    Edit
                                </a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
        </Skeleton>
    );
}

export default Profile;
