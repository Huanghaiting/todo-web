<template>
  <div :class="['todo-item',todo.completed?'completed':'']">
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

<style lang="stylus" scoped>
.todo-item
  position: relative
  background-color: #ffffff
  font-size: 24px
  border-bottom: 1px solid rgba(0, 0, 0, 0.06)
  &:hover
    .destroy:after
      content: 'x'
  .label
    width-space: pre-line
    word-wrap: break-all
    padding: 15px 50px 15px 15px
    margin-left: 45px
    line-height: 1.2
    transition: color 0.4s
  &.completed
    label
      color: #d9d9d9
</style>