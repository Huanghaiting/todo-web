<template>
  <section class="real-app">
    <input type="text"
           autofocus="autofocus"
           placeholder="接下去要做什么？"
           @keyup.enter="addTodo">
  </section>
</template>

<script>
export default {
  methods: {
    addTodo () {

    }
  }
}
</script>

<style lang="stylus" ></style>