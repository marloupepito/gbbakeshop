import {
    AppstoreOutlined,
    MailOutlined,
    CalendarOutlined,
    SettingOutlined,
    LinkOutlined,
} from "@ant-design/icons";
import { Divider, Menu, Switch, Input } from "antd";
import React, { useState, useEffect } from "react";
import { SearchBranchId } from "../../../routes/Search";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
const { Search } = Input;
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const Menus = () => {
    const branch_id = SearchBranchId().props.children;
    const [mode, setMode] = useState("inline");
    const [items, setItems] = useState([]);
    const onSearch = (value) => console.log(value);
    const navigate = useNavigate();
    let { dates } = useParams();
    function onTitleClick(e) {
        navigate(e.target.id);
    }

    useEffect(() => {
        const branchName = window.location.pathname
            .split("/")[2];
        axios
            .post("/get_all_records", {
                id: branch_id,
            })
            .then((res) => {
                setItems(
                    Object.values(res.data.status).map((v) => ({
                        label: (
                            <a
                                id={
                                    "/branch/" +
                                    branchName +
                                    "/production/records/" +
                                    v.date.replace(/ /g,'-').replace(',','.') +
                                    "?branch_id=" +
                                    branch_id
                                }
                                onClick={onTitleClick}
                            >
                                {v.date}
                            </a>
                        ),
                        key: v.date,
                    }))
                );
            });
    }, []);

    return (
        <div>
            <Search
                placeholder="Search date"
                allowClear
                onSearch={onSearch}
                style={{ width: "100%" }}
            />
            
            <div
                className="mt-3 border"
                id="scrollableDiv"
                style={{
                    height: "70vh",
                    overflow: "auto",
                    border: 1,
                    borderRadius: 10,
                }}
            >
            
                <Menu
                    style={{
                        width: "100%",
                    }}
                    defaultSelectedKeys={[dates.replace(/-/g,' ').replace('.',',')]}
                    mode={mode}
                    theme="light"
                    items={items}
                />
            </div>
        </div>
    );
};
export default Menus;
