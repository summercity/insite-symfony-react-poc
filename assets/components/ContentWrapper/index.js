import React from 'react'
import { Layout } from 'antd'
import MainHeader from '../Header'
import SideNav from '../SideNav'
import Breadcrumb from '../Breadcrump'
import PropTypes from 'prop-types'

const { Content } = Layout
const access = true // TODO: Create authentication

function ContentWrapper(props) {
  return (
    access && (
      <>
        <Layout>
          <MainHeader />
          <Layout>
            <SideNav />
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb />
              <Content
                className="site-layout-background"
                style={{
                  padding: 20,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </>
    )
  )
}

ContentWrapper.propTypes = {
  children: PropTypes.element,
}

export default ContentWrapper
