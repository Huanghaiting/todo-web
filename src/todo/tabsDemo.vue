<template>
  <!-- 驰援武汉 严品一直在行动 -->
  <div>
    <span class="tabs">
      <span v-for="state in states"
            :key="state.value"
            :class="[filter === state.value ? 'tabsItem' : '']"
            @click="toggleFilter(state.value)">
        {{state.name}}
      </span>
    </span>
    <div>
      <div v-for="item in states"
           :key="item.value">
        <div v-if="filter === item.value">
          <!-- 内容 -->
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      states: [{
        name: '第三波',
        value: '3'
      }, {
        name: '第二波',
        value: '2'
      }, {
        name: '第一波',
        value: '1'
      }],
      filter: '3'
    }
  },
  methods: {
    toggleFilter (v) {
      this.filter = v
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/var.scss';
.tabs {
  display: flex;
  justify-content: space-around;
}
.tabsItem {
  border-bottom: 1px solid red;
}
</style>