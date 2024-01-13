<script setup>
import { ref, toRefs, computed } from 'vue';
import { useStore, mapState, mapGetters, mapMutations } from 'vuex'
import MapSetUp from './vuex/map函数在setup函数里.js'
const title = ref("APP")

const store = useStore()

// 解构赋值,套用toRefs具有响应式
const { name: sname, level } = toRefs(store.state)

// mapState(['counter'])返回的是一个对象，里面是函数
const { counter, name } = MapSetUp(mapState(['counter', 'name']))

function increment() {
  //提交mutation，去改变state
  // store.commit('increment', 1)
  store.commit({
    type: 'increment',
    add: 4
  })
}
</script>

<script>
export default {
  computed: {
    ...mapState(['level']),
    ...mapGetters(['fullName'])
  },
  methods: {
    ...mapMutations(['changeName'])
  }
}
</script>
<template>
  <h2>{{ title }}</h2>

  <!-- 模板里引用store ,直接引用-->
  <h3>{{ $store.state.counter }}--{{ $store.state.name }}--{{ $store.getters.double }}--{{
    $store.getters.fullName }}</h3>


  <!-- 通过在script里处理后，进行引用 -->
  <!-- 1.在选项式API中 -->
  <h3>{{ level }} --{{ fullName }}</h3>

  <button @click="increment">+1</button>

  <!-- 2.在compositionAPI中 -->
  <h3>{{ counter() }}--{{ name() }}--{{ sname }}</h3>

  <button @click="changeName({
    name: 'kobe',
    level: 13
  })">name</button>
</template>


<style scoped></style>