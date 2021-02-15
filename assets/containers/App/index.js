import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Dashboard from '../Dashboard'
import Login from '../Login'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
    return (
    <AppWrapper>
        <Helmet
          titleTemplate="insiteLogic"
          defaultTitle="insiteLogic"
        >
          <meta name="description" content="insiteLogic" />
        </Helmet>
        {/* <Header /> */}
        <BrowserRouter>
            <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            {/* <Route path="/features" component={FeaturePage} />
            <Route path="" component={NotFoundPage} /> */}
            </Switch>
        </BrowserRouter>
        {/* <Footer />
        <GlobalStyle /> */}
      </AppWrapper>
    );
  };
