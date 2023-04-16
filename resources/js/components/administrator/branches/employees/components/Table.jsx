import { Table } from "antd";
import { message, Popconfirm, Button } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    DeleteTwoTone,
    SafetyCertificateTwoTone,
    CreditCardTwoTone,
    WarningTwoTone,
    WalletTwoTone,
    SnippetsTwoTone,
    ProfileTwoTone,
} from "@ant-design/icons";
import EditAccount from "./Modal";

const AccountTable = (props) => {
  const navigate = useNavigate();
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(true);
    const [branchid, setBranchid] = useState(0);


    function nextPage(id,where){
      const branch_name = window.location.pathname.split('/')[2]
      navigate("/administrator/"+branch_name+"/accounts/api/"+where+"/"+id+"?branch_id="+branchid);
    }
    const columns = [
        {
            title: "FullName",
            dataIndex: "name",
            key: "name",
        },
        {
            align: "center",
            title: "Attendance",
            dataIndex: "attendance",
            key: "attendance",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
              <a onClick={()=>nextPage(id,'attendance')} className="text-center">
               
              <SnippetsTwoTone style={{ fontSize: "20px" }} />
          </a>
            ),
        },
        {
            align: "center",
            title: "Benefits",
            dataIndex: "benefits",
            key: "benefits",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
                <a onClick={()=>nextPage(id,'benefits')} className="text-center">
                    
                    <SafetyCertificateTwoTone style={{ fontSize: "20px" }} />
                </a>
            ),
        },
        {
            align: "center",
            title: "Charges",
            dataIndex: "charges",
            key: "charges",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
                <a onClick={()=>nextPage(id,'charges')} className="text-center">
                <WarningTwoTone style={{ fontSize: "20px" }} />
            </a>
            ),
        },
        {
            align: "center",
            title: "Credits",
            dataIndex: "credits",
            key: "credits",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
                <a onClick={()=>nextPage(id,'credits')} className="text-center">
                <CreditCardTwoTone style={{ fontSize: "20px" }} />
            </a>
            ),
        },
        {
            align: "center",
            title: "Salary",
            dataIndex: "salary",
            key: "salary",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
                <a onClick={()=>nextPage(id,'salary')} className="text-center">
                <WalletTwoTone style={{ fontSize: "20px" }} />
            </a>
            ),
        },
        {
            align: "center",
            title: "Production",
            dataIndex: "Production",
            key: "Production",
            render: (
                _,
                { id, name, shift, username, mobile, gender, position }
            ) => (
                <a onClick={()=>nextPage(id,'production')} className="text-center">
                <ProfileTwoTone style={{ fontSize: "20px" }} />
            </a>
            ),
        },
    ];

    function loadData() {
        setBranchid(props.branchid);
        setLoading(true);
        axios
            .post("/get_all_users", {
                branchid: props.branchid,
            })
            .then((res) => {
                setData(res.data.status);
                setLoading(false);
            });
    }

    useEffect(() => {
        loadData();
    }, [props.load]);

    const confirm = (e) => {
        message.success("Click on Yes");
        axios
            .post("/delete_account", {
                id: e,
            })
            .then((res) => {
                loadData();
            });
    };
    const cancel = (e) => {
        console.log(e);
        //message.error('Click on No');
    };

    return (
        <>
            <Table
                loading={loading}
                columns={columns}
                expandable={{
                    expandedRowRender: (record) => (
                        <div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th width="20%">Fullname</th>
                                        <th width="60%">{record.name}</th>
                                        <th width="10%">
                                            &nbsp; &nbsp;EDIT <EditAccount id={record.id} />
                                        </th>
                                        <th width="10%">
                                           DELETE
                                            <Popconfirm
                                                title="Delete the task"
                                                description="Are you sure to delete this task?"
                                                onConfirm={() =>
                                                    confirm(record.id)
                                                }
                                                onCancel={cancel}
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Button type="link">
                                                    <DeleteTwoTone
                                                        style={{
                                                            fontSize: "20px",
                                                        }}
                                                        twoToneColor="red"
                                                    />
                                                </Button>
                                            </Popconfirm>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Position</td>
                                        <td>{record.position}</td>
                                    </tr>
                                    <tr>
                                        <td>Shift</td>
                                        <td>{record.shift}</td>
                                    </tr>
                                    <tr>
                                        <td>Username</td>
                                        <td>{record.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Mobile</td>
                                        <td>{record.mobile}</td>
                                    </tr>
                                    <tr>
                                        <td>Gender</td>
                                        <td>{record.gender}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ),
                    rowExpandable: (record) => record.name !== "Not Expandable",
                }}
                dataSource={data}
            />
        </>
    );
};
export default AccountTable;
