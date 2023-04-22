import React, { useState, useEffect } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
    Button,
    Col,
    Drawer,
    Form,
    Input,
    Row,
    Select,
    Space,
    message
} from "antd";
import { MinusCircleOutlined } from "@ant-design/icons";
import { SearchBranchId } from "../../../../routes/Search";
import { useNavigate, useLocation } from "react-router-dom";
import { get_branch_ingredients } from "../../../api/Ingredients";
import { AppNotification } from "../../../../components/Notification";
import axios from "axios";

const { Option } = Select;
const EditProductionCode = (props) => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const branchId = SearchBranchId().props.children;
    const ingredientsList = get_branch_ingredients().props.children;
    const [notify, setNotify] = useState(false);
    const [breadList, setBreadList] = useState([]);
    const [bind, setBind] = useState(null);
    const [quantity, setQuantity] = useState(null);
    const location = useLocation();
    const [ingredientsData, setIngredientsData] = useState([]);
    const [a, setA] = useState([]);
    const [b, setB] = useState([]);
    const onClose = () => {
        setOpen(false);
        navigate(
            location.pathname + location.search + "#" + Math.random() * 10000
        );
    };

    useEffect(() => {
        axios
            .post("/get_bread_every_branch2", {
                branchid: branchId,
            })
            .then((res) => {
                setBreadList(res.data.status);
                setA(props.data.bread_name)
                setB(props.data.production_quantity)
            });

            axios
            .post("/get_production_code2", {
                randomid: props.data.random_id,
            })
            .then(res=>{
                setIngredientsData(res.data.status)
                setOpen(props.open)
            })
    }, [props.open]);

    const onFinish = (values) => {
        if (values.users === undefined) {
            setNotify("error");
            function myGreeting() {
                setNotify(false);
                setLoading(false);
            }
            setTimeout(myGreeting, 1000);
        } else {
            axios.patch('/update_production_code',{
                branchid:branchId,
                data:values,
                code:a+' - '+b+'PCS'
              })
            .then(res=>{
                navigate(location.pathname+location.search+'#'+Math.random() * 10000);
                message.success("Ingredients Updated!");
                setOpen(false)
            })
          console.log(values)
        }
    };

    const breadNameHandler = (e) => {
        setA(e);
    };

    const breadQuantityHandler = (e) => {
        setB(e.target.value);
    };

    const bindHandler = (e) => {
        setBind(e);
    };

    const quantityHandler = (e) => {
        setQuantity(e.target.value);
    };
    const openForm = (e) => {
        setOpen(true);
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
           
            <Drawer
                title="EDIT BREAD INGREDIENTS"
                width={"100%"}
                onClose={onClose}
                open={open}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                    </Space>
                }
            >
                <Form
                    layout="vertical"
                    form={form}
                    name="dynamic_form_nest_item"
                    onFinish={onFinish}
                    autoComplete="off"
                    initialValues={
                        {
                            id:props.data.id,
                            breadname:props.data.bread_name,
                            productionquantity:parseInt(props.data.production_quantity),
                            users:ingredientsData
                        }   
                    }
                >
                    <Row gutter={16}>
                        <Col xs={24} sm={12} md={12}>
                            <Row gutter={16}>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item label="Code Name">
                                        {a + " - " + b + "PCS"}
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        name="breadname"
                                        label="Name of Bread"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    "Please enter Bread Name",
                                            },
                                        ]}
                                    >
                                        <Select
                                            onChange={breadNameHandler}
                                            showSearch
                                            style={{ width: "100%" }}
                                            placeholder="Search bread"
                                            optionFilterProp="children"
                                            filterOption={(input, option) =>
                                                (option?.label ?? "").includes(
                                                    input
                                                )
                                            }
                                            filterSort={(optionA, optionB) =>
                                                (optionA?.label ?? "")
                                                    .toUpperCase()
                                                    .localeCompare(
                                                        (
                                                            optionB?.label ?? ""
                                                        ).toUpperCase()
                                                    )
                                            }
                                            className="text-capitalize"
                                            options={breadList.map((res) => ({
                                                label: res.bread_name.toUpperCase(),
                                                value: res.bread_name.toUpperCase(),
                                            }))}
                                        />
                                    </Form.Item>
                                </Col>

                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label={
                                            bind === "Grams"
                                                ? "Target " +
                                                  quantity / 20 +
                                                  " pieces"
                                                : "Target " +
                                                  quantity * 50 +
                                                  " pieces"
                                        }
                                        name="productionquantity"
                                        //initialValue={quantity}
                                        rules={[
                                            {
                                                required: true,
                                                message: "required",
                                            },
                                        ]}
                                    >
                                        <Input
                                        type="number"
                                            onChange={breadQuantityHandler}
                                            style={{
                                                width: "100%",
                                            }}
                                            placeholder="Target pieces"
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>

                        <Col xs={24} sm={12} md={12}>
                            Ingredients List
                            
                            <div>
                                <Form.List name="users">
                                    {(fields, { add, remove }) => (
                                        <>
                                            {fields.map(
                                                ({
                                                    key,
                                                    name,
                                                    ...restField
                                                }) => (
                                                    <Space
                                                        key={key}
                                                        style={{
                                                            display: "flex",
                                                            marginBottom: 8,
                                                        }}
                                                        align="baseline"
                                                    >
                                                        <Form.Item
                                                            {...restField}
                                                            name={[
                                                                name,
                                                                "ingredients_name",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        "required",
                                                                },
                                                            ]}
                                                        >
                                                            <Select
                                                                showSearch
                                                                style={{
                                                                    width: 300,
                                                                }}
                                                                placeholder="Search to Ingredients"
                                                                optionFilterProp="children"
                                                                filterOption={(
                                                                    input,
                                                                    option
                                                                ) =>
                                                                    (
                                                                        option?.label ??
                                                                        ""
                                                                    ).includes(
                                                                        input
                                                                    )
                                                                }
                                                                filterSort={(
                                                                    optionA,
                                                                    optionB
                                                                ) =>
                                                                    (
                                                                        optionA?.label ??
                                                                        ""
                                                                    )
                                                                        .toLowerCase()
                                                                        .localeCompare(
                                                                            (
                                                                                optionB?.label ??
                                                                                ""
                                                                            ).toLowerCase()
                                                                        )
                                                                }
                                                                className="text-capitalize"
                                                                options={ingredientsList.map(
                                                                    (res) => ({
                                                                        label: res.ingredients_name.toLowerCase(),
                                                                        value:
                                                                            res.ingredients_name.toLowerCase() +
                                                                            "|" +
                                                                            res.id,
                                                                    })
                                                                )}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[
                                                                name,
                                                                "bind",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        "required",
                                                                },
                                                            ]}
                                                        >
                                                            <Select
                                                                placeholder="Bind"
                                                                style={{
                                                                    width: 120,
                                                                }}
                                                                options={[
                                                                    {
                                                                        value: "Grams",
                                                                        label: "Grams",
                                                                    },
                                                                    {
                                                                        value: "Kilo",
                                                                        label: "Kilo",
                                                                    },
                                                                    {
                                                                        value: "Pcs",
                                                                        label: "Pcs",
                                                                    },
                                                                ]}
                                                            />
                                                        </Form.Item>

                                                        <Form.Item
                                                            {...restField}
                                                            name={[
                                                                name,
                                                                "quantity",
                                                            ]}
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message:
                                                                        "required",
                                                                },
                                                            ]}
                                                        >
                                                            <Input
                                                                type="number"
                                                                style={{
                                                                    width: 120,
                                                                }}
                                                                placeholder="Quantity"
                                                            />
                                                        </Form.Item>

                                                        <MinusCircleOutlined
                                                            onClick={() =>
                                                                remove(name)
                                                            }
                                                        />
                                                    </Space>
                                                )
                                            )}
                                            <br />
                                            <Form.Item>
                                                <Button
                                                    type="dashed"
                                                    onClick={() => add()}
                                                    block
                                                    icon={<PlusOutlined />}
                                                >
                                                    Add field
                                                </Button>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form.List>
                                <br />
                                <Form.Item>
                                    <Button
                                        loading={loading}
                                        type="primary"
                                        block
                                        htmlType="submit"
                                    >
                                        Submit
                                    </Button>
                                </Form.Item>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
};
export default EditProductionCode;
