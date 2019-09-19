import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Switch, Router, Route, NavLink, } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// TODO: Somehow, we will import these with single-spa...
// import MicroUiApp1 from 'micro-ui-app1';
// import MicroUiApp2 from 'micro-ui-app2';

const history = createBrowserHistory();

const Tab = styled('div')`
  display: inline;
  margin-right: 10px;
  padding-bottom: 10px;

  &:last-child {
    margin-right: 0;
  }
`;

const Container = styled('div')`
  margin-top: 10px;
`;

const CustomNavLink = (props) => (
  <NavLink
    style={{
      textDecoration: 'none'
    }}
    activeStyle={{
      fontWeight: 'bold',
      borderBottom: '3px solid white'
    }}
    {...props}
  />
);

const Home = function() {
  return (
    <div data-testid="Home">Home</div>
  );
};

const MicroUiApp1 = function() {
  return (
    <div data-testid="MicroUiApp1">Micro UI App 1</div>
  );
};

const MicroUiApp2 = function() {
  return (
    <div data-testid="MicroUiApp2">Micro UI App 2</div>
  );
};

const App = function() {
  return (
    <Router history={history}>
      <div>
        <h1>Micro UI Main Container</h1>
        <Tab><CustomNavLink exact to="/">Home</CustomNavLink></Tab>
        <Tab><CustomNavLink to="/app1">Micro UI App 1</CustomNavLink></Tab>
        <Tab><CustomNavLink to="/app2">Micro UI App 2</CustomNavLink></Tab>
      </div>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/app1" component={MicroUiApp1} />
          <Route path="/app2" component={MicroUiApp2} />
        </Switch>
      </Container>
    </Router>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
