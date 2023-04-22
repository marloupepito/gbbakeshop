import React, { useContext, useEffect, useRef, useState } from "react";
import {
    Button,
    Drawer,
    theme,
    Space,
    Input,
    Table,
    Popconfirm,
    Form,
    message,
} from "antd";

import { useNavigate,useLocation } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { SearchBranchId } from "../../../../../routes/Search";
import Highlighter from "react-highlight-words";
const EditableContext = React.createContext(null);

function Drawer2() {
    const { token } = theme.useToken();
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const branchId = SearchBranchId().props.children;
    const [searchText, setSearchText] = useState("");
    const [searchedColumn, setSearchedColumn] = useState("");
    const searchInput = useRef(null);
    const [breadList, setBreadList] = useState([]);
    const location = useLocation();
    const onClose = () => {
        setOpen(false);
    };
    const openForm = () => {
        setOpen(true);
    };

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText("");
    };

    useEffect(() => {
        axios
            .post("/get_bread_every_branch2", {
                branchid: branchId,
            })
            .then((res) => {
                setBreadList(res.data.status);
            });
    }, [location.hash]);

    const handleDelete = (key) => {
        const newData = breadList.filter((item) => item.key !== key);
         axios.delete('/api/delete_bread/'+String(key))
         .then(res=>{
            setBreadList(newData);
            message.success('Bread deleted!');
         })
         .catch(err=>{
            message.error('Error response!');
         })
    };

    const EditableRow = ({ index, ...props }) => {
        const [form] = Form.useForm();
        return (
            <Form form={form} component={false}>
                <EditableContext.Provider value={form}>
                    <tr {...props} />
                </EditableContext.Provider>
            </Form>
        );
    };
    const EditableCell = ({
        title,
        editable,
        children,
        dataIndex,
        record,
        handleSave,
        ...restProps
    }) => {
        const [editing, setEditing] = useState(false);
        const inputRef = useRef(null);
        const form = useContext(EditableContext);
        useEffect(() => {
            if (editing) {
                inputRef.current.focus();
            }
        }, [editing]);
        const toggleEdit = () => {
            setEditing(!editing);
            form.setFieldsValue({
                [dataIndex]: record[dataIndex],
            });
        };
        const save = async () => {
            try {
                const values = await form.validateFields();
                toggleEdit();
                handleSave({
                    ...record,
                    ...values,
                });
            } catch (errInfo) {
                console.log("Save failed:", errInfo);
            }
        };
        let childNode = children;
        if (editable) {
            childNode = editing ? (
                <Form.Item
                    style={{
                        margin: 0,
                    }}
                    name={dataIndex}
                    rules={[
                        {
                            required: true,
                            message: `${title} is required.`,
                        },
                    ]}
                >
                    <Input ref={inputRef} onPressEnter={save} onBlur={save} />
                </Form.Item>
            ) : (
                <div
                    className="editable-cell-value-wrap"
                    style={{
                        paddingRight: 24,
                    }}
                    onClick={toggleEdit}
                >
                    {children}
                </div>
            );
        }
        return <td {...restProps}>{childNode}</td>;
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() =>
                        handleSearch(selectedKeys, confirm, dataIndex)
                    }
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() =>
                            handleSearch(selectedKeys, confirm, dataIndex)
                        }
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() =>
                            clearFilters && handleReset(clearFilters)
                        }
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });

    const defaultColumns = [
        {
            title: "Name of Bread",
            dataIndex: "bread_name",
            key: "bread_name",
            width: "30%",
            ...getColumnSearchProps("bread_name"),
            editable: true,
        },
        //  {
        //    title: 'Quantity',
        //    dataIndex: 'quantity',
        //    key: 'quantity',
        //    width: '20%',
        //    ...getColumnSearchProps('quantity'),
        //    editable: true,
        //  },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
            ...getColumnSearchProps("price"),
            sorter: (a, b) => a.price.length - b.price.length,
            sortDirections: ["descend", "ascend"],
            editable: true,
        },
        {
            title: "operation",
            dataIndex: "operation",
            render: (_, record) =>
                breadList.length >= 1 ? (
                    <Popconfirm
                        title="Sure to delete?"
                        onConfirm={() => handleDelete(record.key)}
                    >
                        <a>Delete</a>
                    </Popconfirm>
                ) : null,
        },
    ];
    const handleSave = (row) => {
        const newData = [...breadList];
        const index = newData.findIndex((item) => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        setBreadList(newData);
        axios
            .patch("/edit_branch_bread_list", {
                data: row,
            })
            .then((res) => {
                message.success("Bread Updated!");
            });
    };
    const components = {
        body: {
            row: EditableRow,
            cell: EditableCell,
        },
    };

    const columns = defaultColumns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                editable: col.editable,
                dataIndex: col.dataIndex,
                title: col.title,
                handleSave,
            }),
        };
    });
    const [form] = Form.useForm();
    const onFinish = (values) => {
       values.branch_id = branchId
       console.log()
        axios.post('/add_branch_bread',{
            data:values,
        })
        .then(res=>{
           onReset()
           message.success("Bread Added!");
           navigate(location.pathname+location.search+'#'+Math.random() * 10000);
        })
    };

    const onReset = () => {
        form.resetFields();
      };
    return (
        <>
            <Button onClick={openForm} danger size="large" block>
                BREAD LIST
            </Button>
            <Drawer
                title="List of Bread"
                width={"100%"}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <div className="row">
                    <div className="col-md-6">
                        <div className="col-md-6 offset-md-3" >
                        <Form
                        form={form}
                            name="normal_login"
                            className="login-form"
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            layout="vertical"
                        >
                           
                            <Form.Item
                            label="Name of Bread"
                                name="bread_name"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input bread name!",
                                    },
                                ]}
                            >
                                <Input
                                    
                                    placeholder="Name of Bread"
                                />
                            </Form.Item>
                            <Form.Item
                            label="Price"
                                name="price"
                                rules={[
                                    {
                                        required: true,
                                        message: "Please input Price!",
                                    },
                                ]}
                            >
                                <Input
                                   
                                    type="number"
                                    placeholder="Please input Price"
                                />
                            </Form.Item>
                          
                            <Form.Item>
                                <br />
                            <a className="btn btn-danger btn-sm" onClick={onReset}>Reset</a>
                            <Button type="primary" block htmlType="submit" className="mt-4 login-form-button">
                            Log in
                            </Button>
                        </Form.Item>
                        </Form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Table
                            components={components}
                            rowClassName={() => "editable-row"}
                            bordered
                            columns={columns}
                            dataSource={breadList}
                        />
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default Drawer2;
