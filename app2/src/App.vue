<template>
  <div id="micro-ui-app2">
    <h2>micro-ui-app2: Vue + Webpack</h2>
    <ol>
      <TodoItem v-for="todo in todos" v-bind:item="todo" v-bind:key="todo.id">{{ todo.text }}</TodoItem>
    </ol>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem
  },
  data() {
    return {
      todos: [
        { id: 0, text: "Learn Vue" },
        { id: 1, text: "Build something awesome" }
      ]
    };
  }
};
</script>
