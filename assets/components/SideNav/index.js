
import React, { useContext, useMemo } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  PieChartOutlined,
  CalendarOutlined,
  DesktopOutlined,
  BankOutlined,
  AreaChartOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Context } from '../../context/ContextStore'
import './sidenav.scss';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideNav = () => {
    const [state, dispatch] = useContext(Context)
    const { app } = state
  return useMemo(() => { 
      return (
        <>
            <Sider
                width={200}
                className="site-layout-background"
                className="side-nav"
                collapsible 
                collapsed={app.sideNavCollapse}
            >
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["dashboard"]} // TODO: Create global state
                    // defaultOpenKeys={["sub1"]} TODO: Create global state
                    style={{ height: "100%", borderRight: 0 }}
                >
                    <Menu.Item key="dashboard" icon={<AppstoreOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="overview" icon={<PieChartOutlined />}>
                        Overview
                    </Menu.Item>
                    <Menu.Item key="myWorkDay" icon={<CalendarOutlined />}>
                        My Work Day
                    </Menu.Item>
                    <Menu.Item key="leadReport" icon={<DesktopOutlined />}>
                        Leads Report
                    </Menu.Item>
                    <SubMenu key="stock" icon={<BankOutlined />} title="Stock">
                        <Menu.Item key="1">Land Stats</Menu.Item>
                        <Menu.Item key="2">Package Stats</Menu.Item>
                    </SubMenu>
                    <SubMenu key="reporting" icon={<AreaChartOutlined />} title="Reporting">
                        <Menu.Item key="5">Download Reports</Menu.Item>
                        <Menu.Item key="6">Web Reports</Menu.Item>
                        <Menu.Item key="7">eDM Reports</Menu.Item>
                        <Menu.Item key="8">Marketing Report</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="admin"
                        icon={<TeamOutlined />}
                        title="Admin"
                    >
                        <Menu.Item key="9">Admin Settings</Menu.Item>
                        <Menu.Item key="10">User Settings</Menu.Item>
                        <Menu.Item key="11">Integrations</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="insiteProducts" disabled>
                        Insite Products
                    </Menu.Item>
                    <Menu.Item key="invManagement" icon={<ShoppingCartOutlined />}>
                        Inv. Management
                    </Menu.Item>
                    <Menu.Item key="systems" disabled>
                        Systems
                    </Menu.Item>
                    <Menu.Item key="registerUser" icon={<UserAddOutlined />}>
                        Register User
                    </Menu.Item>
                    <Menu.Item key="logout" icon={<LogoutOutlined />}>
                        Logout
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    );
    },[app, dispatch])
}

export default SideNav;
