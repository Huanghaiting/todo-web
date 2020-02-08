<template>
  <div>
    <input type="checkbox"
           class="toggle"
           v-model="todo.completed">
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      return
    }
  }
}
</script>

<style>
</style>