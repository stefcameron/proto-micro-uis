import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled';
import { Switch, Router, Route, NavLink } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { navigateToUrl } from 'single-spa';
import { registerApps } from './microUIs';

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

const NavBar = styled('div')`
  a:visited {
    color: blue;
  }
`;

const CustomNavLink = (props) => (
  <NavLink
    style={{
      textDecoration: 'none'
    }}
    activeStyle={{
      fontWeight: 'bold',
      borderBottom: '3px solid blue'
    }}
    {...props}
  />
);

const Home = function() {
  return (
    <div data-testid="Home">Home</div>
  );
};

const App = function() {
  return (
    <Router history={history}>
      <div>
        <h1>Micro UI Container</h1>
        <NavBar>
          <Tab><CustomNavLink exact to="/">Home</CustomNavLink></Tab>
          <Tab><CustomNavLink to="/micro-ui-app1">Micro UI App 1</CustomNavLink></Tab>
          <Tab><CustomNavLink to="/micro-ui-app2">Micro UI App 2</CustomNavLink></Tab>
        </NavBar>
      </div>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            // NOTE: main app assumes that any inner-routing done by app1 will be
            //  based from this path and allows any sub-paths
            path="/micro-ui-app1/:subpath*"
            // NOTE: this method, from single-spa, will trigger the lazy load of app1
            render={(props) => {
              // NOTE: It's critical that subpath, if any, is appended to the URL
              //  used to trigger the app; otherwise, because this route will
              //  get triggered anytime a route in the app is triggered (since
              //  the app's routes are sub paths), it'll keep resetting the
              //  path to /micro-ui-app1 and the sub route won't get rendered;
              //  here, `match.url` contains the full URL, including the subpath,
              //  which is easier than appending `props.match.params.subpath`
              //  if it isn't `undefined` (when there's no subpath).
              // NOTE: There's still an issue with restoring the subpath on the
              //  route in some cases, but navigation still works; to be fixed...
              navigateToUrl(props.match.url);
            }}
          />
          <Route
            path="/micro-ui-app2/:subpath*"
            render={({ match }) => navigateToUrl(match.url)}
          />
        </Switch>
      </Container>
    </Router>
  );
};

registerApps();

ReactDOM.render(
  <App />,
  document.getElementById('micro-ui-main')
);
