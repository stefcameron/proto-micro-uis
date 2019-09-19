import Vue from 'vue';

const appId = 'micro-ui-app2';

const TodoItem = Vue.component("TodoItem", {
  template: "<li>{{ item.text }}</li>",
  props: ["item"]
});

const App = Vue.component("App", {
  template: `
<div data-testid="${appId}">
  <p>${appId}: Vue + Webpack</p>
  <ol>
    <TodoItem
      v-for="todo in todos"
      v-bind:item="todo"
      v-bind:key="todo.id"
    >
      {{ todo.text }}
    </TodoItem>
  </ol>
</div>
  `,
  data() {
    return {
      todos: [
        { id: 0, text: 'Learn Vue' },
        { id: 1, text: 'Build something awesome' }
      ]
    };
  }
});

new Vue({
  components: {
    App,
    TodoItem
  },
  render: h => h(App)
}).$mount(`#${appId}`);
