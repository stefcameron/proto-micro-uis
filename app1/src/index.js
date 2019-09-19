import React from 'react';
import ReactDOM from 'react-dom';

const appId = 'micro-ui-app1';

const TodoItem = function(props) {
  return (
    <li>{props.item.text}</li>
  );
};

const App = function() {
  const todos = [
    { text: 'Learn React' },
    { text: 'Build something awesome' }
  ];

  return (
    <div data-testid={appId}>
      <p>{appId}: React + Rollup</p>
      <ol>
        {todos.map((todo) => <TodoItem item={todo} />)}
      </ol>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById(appId)
);
