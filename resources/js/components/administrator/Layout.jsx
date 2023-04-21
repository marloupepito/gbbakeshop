import React, { useState } from "react";
import { Layout, Menu, theme, Button } from "antd";
import Menus from "./components/Menu";
import { LogoutOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import LogoutSession from "../auth/Logout";

import { useParams } from 'react-router-dom';
const AdminLayoutPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [logout, setLogout] = useState(false);
    let { id } = useParams();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    function LogoutUser() {
        logout === true ? setLogout(false) : setLogout(true);
    }
    return (
        <Layout hasSider>
            {logout === true ? <LogoutSession show={logout} /> : false}
            <Sider
            theme="light"
                width="250px"
                className="border border-right"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    bottom: 0,
                }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    // console.log(broken);
                }}
                // onCollapse={(collapsed, type) => {
                // //  console.log(collapsed, type);
                // }}

                // collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
            >
                <img src="/images/logo.jpg" width="100%" />

                <Menus />
               
            </Sider>
            <Layout
                style={{
                    height: "100vh",
                    background: colorBgContainer,
                }}
            >
                <Header
                    style={{
                        background: colorBgContainer,
                    }}
                    className="border-bottom"
                >
                    <div>
                        <b className="text-danger">GB</b> <b>BAKESHOP</b>
                        
                       <a  style={{float:'right',fontSize: '20px'}} onClick={LogoutUser}>
                       <LogoutOutlined />
                       </a>
                    </div>
                    
                </Header>
                <Content
                    style={{
                        overflow: "auto",
                        height: "100vh",
                    }}
                >
                    <br />
                    <div className="container">
                    <h3><b>{id === undefined?'ADMINISTRATOR':id.replace(/_/g,' ')}</b></h3>
                        <Outlet />
                    </div>
                </Content>
                {/*  <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>*/}
            </Layout>
        </Layout>
    );
};
export default AdminLayoutPage;
