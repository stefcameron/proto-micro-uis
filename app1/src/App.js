import React from 'react';
import styled from '@emotion/styled';
import { Switch, Router, Route, NavLink, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const appId = 'micro-ui-app1';
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

  a, a:visited {
    color: green;
  }
`;

const NavBar = styled('div')`
  a, a:visited {
    color: green;
  }
`;

const CustomNavLink = (props) => (
  <NavLink
    style={{
      textDecoration: 'none'
    }}
    activeStyle={{
      fontWeight: 'bold',
      borderBottom: '3px solid green'
    }}
    {...props}
  />
);

class App extends React.Component {
  // NOTE: single-spa warns if this method isn't implemented, so that forced
  //  the conversion of this root component from functional to class-based
  //  since there's no hook for this yet
  componentDidCatch(error, info) {
    // NOTE: In reality, we'd send this to a configured logging server
    console.error('ERROR: Caught in %s', appId, error, info);
  }

  render() {
    // NOTE: ALL paths are configured using the same base route path that the main
    //  app assigns to this app (i.e. the `appId`). This ensures that when any of
    //  the subroutes are activated, the app remains loaded in the main app.
    const todos = [
      {
        text: 'Learn React',
        path: `/${appId}/learn`,
        content: (
          <p>
            Start with <a href="https://reactjs.org/docs/getting-started.html" target="_blank">the docs!</a>
          </p>
        )
      },
      {
        text: 'Build something awesome',
        path: `/${appId}/build`,
        content: (
          <p>Anything you want! Your imagination is the only limit.</p>
        )
      }
    ];

    return (
      <div data-testid={appId}>
        <Router history={history}>
          <div>
            <h2>{appId}: React + Rollup</h2>
            <NavBar>
              {todos.map((todo, i) => (
                <Tab key={i}>
                  <CustomNavLink to={todo.path}>{todo.text}</CustomNavLink>
                </Tab>
              ))}
            </NavBar>
          </div>
          <Container>
            <Switch>
              {/* redirect to first todo item on load */}
              <Route
                exact
                path={`/${appId}`}
                render={() => <Redirect to={todos[0].path} />}
              />
              {/* generate routes based on todo items */}
              {todos.map((todo, i) => (
                <Route
                  key={i}
                  path={todo.path}
                  render={() => todo.content}
                />
              ))}
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
};

export { appId };
export default App;
