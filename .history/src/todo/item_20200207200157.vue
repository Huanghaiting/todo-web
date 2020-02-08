<template>
  <div>
    <input type="checkbox"
           class="toggle"
           v-model="todo.completed">
    <label></label>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>