import React,{useState,useEffect } from 'react';
import { Layout, Menu, theme,Button } from 'antd';
import Menus from './components/Menu';
import { LogoutOutlined } from '@ant-design/icons';
import {Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import LogoutSession from '../auth/Logout'
const BranchLayout = () => {
  const [logout,setLogout] = useState(false)
  const [name,setName] = useState(false)


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  function LogoutUser(){
    
    logout === true?setLogout(false):setLogout(true)
  }

    useEffect(() => {
      setName(JSON.parse(localStorage.getItem("user")).name)   
    },[]);


  return (
   <Layout hasSider>
      {
        logout === true?<LogoutSession show={logout}/>:false
      }
      <Sider
      width="250px"
      className='border border-right'
      style={{
        height: '100vh',
        left: 0,
        top: 0,
        bottom: 0,
        background: colorBgContainer,
      }}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
         // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
        //  console.log(collapsed, type);
        }}
      >
     <img src="/images/logo.jpg" width="100%"/>
        
        <Menus />
        <Button type="primary" danger onClick={LogoutUser}  className="position-absolute bottom-0 end-0" icon={<LogoutOutlined />} block size="large">
            Logout
          </Button>
        
      </Sider>
      <Layout
       style={{
        height: '100vh',
        background: colorBgContainer,
      }}
       >
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="border-bottom"
        ><div>
            <b className="text-danger">Hi</b> <b className="text-capitalize">{name}!</b>
            </div></Header>
        <Content
        style={{
          overflow: 'auto',
          height: '100vh',
        }}
        >
        <br />
          <div className="container">
          <Outlet/>
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
export default BranchLayout;