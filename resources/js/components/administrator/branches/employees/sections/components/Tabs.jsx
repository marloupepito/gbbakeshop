import { Radio, Space, Tabs } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import moment from "moment";
import {
    BarsOutlined,
    SafetyCertificateOutlined,
    ClockCircleOutlined,
    IssuesCloseOutlined,
    CreditCardOutlined,
    WalletOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const Tab = () => {
    const navigate = useNavigate();
    const tabs = window.location.pathname.split('/')[5]
    const [tabPosition, setTabPosition] = useState("top");
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };

    function nextTab(e) {
        const branch = window.location.pathname.split("/")[2];
        const userid = window.location.pathname.split("/")[6];
        const id = window.location.search.substring(1);
        // navigate(
        //     "/administrator/" +
        //         branch +
        //         "/accounts/api/" +
        //         e +
        //         "/" +
        //         userid +
        //         "?" +
        //         id
        // );
        if (e === "charges") {
            navigate(
                "/administrator/" +
                    branch +
                    "/accounts/api/" +
                    e +
                    "/" +userid+'/'+
                    moment().format("MMMM-DD.-YYYY-A") +
                    "?" +
                    id
            );
        } else {
            navigate("/administrator/" + branch + "/accounts/api/" + e +"/" +
            userid+ "?" + id);
        }
       
    }
    return (
        <>
            <Tabs
            className="mb-5"
            size="large"
            defaultActiveKey={tabs}
                onChange={nextTab}
                tabPosition={tabPosition}
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
                                Production
                            </span>
                        ),
                        key: "production",
                        children: <Outlet />,
                    },
                 
                ]}
            />
        </>
    );
};
export default Tab;
