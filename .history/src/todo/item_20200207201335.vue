<template>
  <div>
    <input type="checkbox"
           class="toggle"
           v-model="todo.completed">
    <label>{{todo.content}}</label>
    <button class="destroy"
            @click="deleteTodo"></button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteTodo () {

    }
  }
}
</script>

<style>
</style>