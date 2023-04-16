import React, { useState, useEffect } from "react";
import { Menu, theme } from "antd";
import { GetAllBranch } from "./../api/Branch";
import {
    ShopTwoTone,
    SnippetsTwoTone,
    SettingTwoTone,
    ProfileTwoTone,
    ContactsTwoTone,
    DashboardTwoTone,
    IdcardTwoTone,
    PieChartTwoTone,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { SearchBranchId } from "../../routes/Search";

const Menus = () => {
    const navigate = useNavigate();
    const [openKeys, setOpenKeys] = useState(["parent1"]);

    const id = SearchBranchId().props.children;
    const category = window.location.pathname.split("/")[3];

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const branches = GetAllBranch().props.children;
    function onTitleClick(e) {
        navigate("/administrator/" + e.target.id.replace(/ /g, "_"));
    }

    const rootSubmenuKeys = branches.map((res) => "parent" + res.id);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    useEffect(() => {
        setOpenKeys(["parent" + id]);
    }, []);
    return (
        <Menu
            onOpenChange={onOpenChange}
            theme="light"
            openKeys={openKeys}
            mode="inline"
            defaultSelectedKeys={[
                category + id === "undefinedmain"
                    ? "parentmain"
                    : category + id,
            ]}
            items={[
                {
                    key: "parentmain",
                    label: (
                        <a id="dashboard?branch_id=main" onClick={onTitleClick}>
                            Dashboard
                        </a>
                    ),
                    icon: <DashboardTwoTone twoToneColor="red" />,
                },
                ...branches.map((res) => ({
                    key: ["parent" + res.id],
                    icon: <ShopTwoTone twoToneColor="red" />,
                    label: res.branch_name,
                    children: [
                        {
                            key: String("dashboard" + res.id),
                            label: (
                                <a
                                    id={
                                        res.branch_name +
                                        "/daily?branch_id=" +
                                        res.id
                                    }
                                    onClick={onTitleClick}
                                >
                                    Dashboard
                                </a>
                            ),
                            icon: <PieChartTwoTone />,
                        },
                        {
                            key: String("delivery" + res.id),
                            label: (
                                <a
                                    id={
                                        res.branch_name +
                                        "/delivery/request?branch_id=" +
                                        res.id
                                    }
                                    onClick={onTitleClick}
                                >
                                    Delivery
                                </a>
                            ),
                            icon: <SnippetsTwoTone />,
                        },
                        {
                            key: String("ingredients" + res.id),
                            label: (
                                <a
                                    id={
                                        res.branch_name +
                                        "/ingredients?branch_id=" +
                                        res.id
                                    }
                                    onClick={onTitleClick}
                                >
                                    Raw Materials
                                </a>
                            ),
                            icon: <SettingTwoTone />,
                        },
                       
                        {
                            key: String("production" + res.id),
                            label: (
                                <a
                                    id={
                                        res.branch_name +
                                        "/production/create?branch_id=" +
                                        res.id
                                    }
                                    onClick={onTitleClick}
                                >
                                    Production
                                </a>
                            ),
                            icon: <ProfileTwoTone />,
                        },
                        {
                            key: String("accounts" + res.id),
                            label: (
                                <a
                                    id={
                                        res.branch_name +
                                        "/accounts?branch_id=" +
                                        res.id
                                    }
                                    onClick={onTitleClick}
                                >
                                    Accounts
                                </a>
                            ),
                            icon: <IdcardTwoTone />,
                        },
                       
                        // {
                        //     key: String('employees'+res.id),
                        //     label:<a id={res.branch_name+'/employees?branch_id='+res.id} onClick={onTitleClick}>Employees</a>,
                        //     icon:<ContactsTwoTone />,
                        // }
                    ],
                })),
            ]}
        />
    );
};

export default Menus;
