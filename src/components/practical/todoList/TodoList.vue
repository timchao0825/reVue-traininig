<template lang="pug">
.todoList
  h1 Todo List
  TodoInput(@submit="addTodo")
  ul
    TodoItem(v-for="(todo , idx) in todos" :data="todo" :key="idx" @click.native="removeTodo(idx)")
</template>

<script>
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
export default {
  name: 'todoList',
  components:{
    TodoInput,
    TodoItem
  },
  data() {
    return {
      todos:[],
    }
  },
  methods: {
    addTodo(text){
      this.todos.push(text);
    },
    removeTodo(idx){
      this.todos.splice(idx, 1);
    }
  },
}
</script>

<style lang="scss" scoped></style>
