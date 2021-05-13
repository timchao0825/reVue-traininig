<template lang="pug">
.Todo
  TodoInput(@input="addItem")
  ul
    TodoItem(v-for="todo in todos" :label="todo")
</template>

<script>
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
export default {
  name: 'Todo',
  components: {
    TodoInput,
    TodoItem
  },
  data () {
    return {
      todos: ['a', 'b', 'c']
    }
  },
  methods: {
    addItem (text) {
      this.todos.push(text)
    }
  }
}
</script>

<style lang="scss" scoped></style>
