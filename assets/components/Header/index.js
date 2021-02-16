import React from 'react';
import { Layout } from "antd";
import { MenuFoldOutlined } from '@ant-design/icons';
import './header.scss';

const { Header } = Layout;

function MainHeader() {
  return (
    <>
        <Header className="header">
            <div className="menu-icon">
                <MenuFoldOutlined />
            </div>
            <div className="logo">
                <img src="https://storage.googleapis.com/proj.insitelogic.com.au/etc/insite.png" />
            </div>
        </Header>
    </>
  );
}

export default MainHeader;
