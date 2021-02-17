import React, { useContext } from 'react';
import { Layout } from "antd";
import { MenuFoldOutlined } from '@ant-design/icons';
import { Context } from '../../context/ContextStore'
import { SET_APP } from '../../context/constant'
import './header.scss';

const { Header } = Layout;

function MainHeader() {
  const [state, dispatch] = useContext(Context);

  const handleClickCollapse = () => {
    const { app } = state
    const newCollapse =  app.sideNavCollapse ? false : true
    const payload = {
      ...state.app,
      sideNavCollapse: newCollapse
    }
    dispatch({type: SET_APP, payload: payload});
  }
  return (
    <>
        <Header className="header">
            <div className="menu-icon" onClick={handleClickCollapse}>
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
