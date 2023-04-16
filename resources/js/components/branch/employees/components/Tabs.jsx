import { Tabs } from "antd";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
    BarsOutlined,
    SafetyCertificateOutlined,
    ClockCircleOutlined,
    IssuesCloseOutlined,
    CreditCardOutlined,
    WalletOutlined,
} from "@ant-design/icons";
const Tab = () => {
    const navigate = useNavigate();
    const [size, setSize] = useState("large");
    const [branchid, setBranchid] = useState(
        window.location.pathname.split("/")[4]
    );
    const onChange = (e) => {
        setSize(e.target.value);
    };

    function nextTab(e) {
        const branch = window.location.pathname.split("/")[2];
        const id = window.location.search.substring(1);
        if (e === "charges") {
            navigate(
                "/branch/" +
                    branch +
                    "/accounts/" +
                    e +
                    "/" +
                    moment().format("MMMM-DD.-YYYY-A") +
                    "?" +
                    id
            );
        } else {
            navigate("/branch/" + branch + "/accounts/" + e + "?" + id);
        }
    }

    return (
        <div className="mb-5">
            <hr />
            <Tabs
                onChange={nextTab}
                tabPosition="top"
                className="mt-2"
                defaultActiveKey={branchid}
                size={size}
                items={[
                    {
                        label: (
                            <span>
                                <ClockCircleOutlined />
                                Attendance
                            </span>
                        ),
                        key: "attendance",
                        children: <Outlet />,
                    },
                    {
                        label: (
                            <span>
                                <IssuesCloseOutlined />
                                Charges
                            </span>
                        ),
                        key: "charges",
                        children: <Outlet />,
                    },
                    {
                        label: (
                            <span>
                                <CreditCardOutlined />
                                Credits
                            </span>
                        ),
                        key: "credits",
                        children: <Outlet />,
                    },
                    {
                        label: (
                            <span>
                                <WalletOutlined />
                                Salary
                            </span>
                        ),
                        key: "salary",
                        children: <Outlet />,
                    },
                    {
                        label: (
                            <span>
                                <SafetyCertificateOutlined />
                                Benefits
                            </span>
                        ),
                        key: "benefits",
                        children: <Outlet />,
                    },
                    {
                        label: (
                            <span>
                                <BarsOutlined />
                                Production Status
                            </span>
                        ),
                        key: "production",
                        children: <Outlet />,
                    },
                ]}
            />
        </div>
    );
};
export default Tab;
