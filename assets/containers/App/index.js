import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Dashboard from '../Dashboard'
import Login from '../Login'
import NotFoundPage from '../../components/NotFoundPage'

const AppWrapper = styled.div`
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
            <Route path="" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
        {/* <Footer />
        <GlobalStyle /> */}
      </AppWrapper>
    );
  };
