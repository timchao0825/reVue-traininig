
<template>
  <div class="test">
    <h1>Hello World</h1>
    <!-- <h2>{{message}}</h2>
    <div class="counter">
      <h3>{{count}}</h3>
      <button v-on:click="addCount">+!</button>
    </div>
    <div>
      <h3  v-if="see">Now you see me</h3>
      <h3 v-else>Now You Don't See the word</h3>
    </div>
    <button v-on:click="handleSee"> See or Not See</button>
    <div>
      <div v-for="step in steps" :key="step">{{step}} 111</div>
      <button v-on:click="handleRemove">Remove</button>
    </div>
    <div>
      <h3>V-model</h3>
      <input type="text" v-model="text" />
      <h4>v-model => {{text}}</h4>
    </div> -->
    <div>
      <h3>Todo List</h3>
      <input
        v-model="input"
        type="text"
      >
      <button @click="addItem">
        add
      </button>
      <div
        v-for="(todo , index) in todos"
        :key="todo"
      >
        <h4 @click="removeItem(index)">
          {{ index }} {{ todo }}
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      input: '',
      text: '',
      count: 0,
      message: 'hello world',
      see: true,
      steps: [
        '1 ==> ',
        '2 ==> ',
        '3 ==> '
      ],
      todos: [
        'todo item 1',
        'todo item 2',
        'todo item 3'
      ]
    }
  },
  methods: {
    addCount () {
      this.count += 1
    },
    handleSee () {
      this.see = !this.see
    },
    handleRemove () {
      this.steps.pop()
    },
    addItem () {
      console.log('add item')
      this.todos.push(this.input)
      this.input = ''
    },
    removeItem (index) {
      console.log(index)
      this.todos.splice(index, 1)
    }
  }
}
</script>
