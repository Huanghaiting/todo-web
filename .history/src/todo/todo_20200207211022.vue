<template>
  <section class="real-app">
    <input type="text"
           class="add-input"
           autofocus="autofocus"
           placeholder="接下去要做什么？"
           @keyup.enter="addTodo">
    <item></item>
  </section>
</template>

<script>
import Item from './item.vue'
export default {
  components: {
    Item
  },
  methods: {
    addTodo () {

    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app
  width: 600px
  margin: 0 auto
  box-shadow: 0 0 5px #666
.add-input
  position: relative
  margin: 0
  width: 100%
  font-size: 24px
  font-family: inherit
  font-weight: inherit
  line-height: 1.4rem
  border: 0
  outline: none
  padding: 6px
  border: 1px solid #999999
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.4)
  padding: 16px 16px 16px 60px
  border: none
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.4)
</style>