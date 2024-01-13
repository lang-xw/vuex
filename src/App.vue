<script setup>
import { ref, computed } from 'vue';
import { useStore, mapState } from 'vuex'
import MapSetUp from './vuex/map函数在setup函数里.js'
const title = ref("APP")

const store = useStore()

// 解构赋值
const { name: sname } = store.state

// mapState(['counter'])返回的是一个对象，里面是函数
const { counter, name } = MapSetUp(mapState(['counter', 'name']))

</script>

<script>
export default {
  computed: {
    ...mapState(['counter'])
  }
}
</script>
<template>
  <h2>{{ title }}</h2>

  <!-- 模板里引用store -->
  <h3>{{ $store.state.counter }}--{{ sname }}</h3>

  <h3>{{ counter() }}--{{ name() }}</h3>
</template>


<style scoped></style>