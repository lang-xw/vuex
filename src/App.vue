<script setup>
import { ref, toRefs, computed } from 'vue';
import { useStore, mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import MapSetUp from './vuex/map函数在setup函数里.js'
const title = ref("APP")

const store = useStore()

// 解构赋值,套用toRefs具有响应式
const { name: sname, level } = toRefs(store.state)

// mapState(['counter'])返回的是一个对象，里面是函数
const { counter, name } = MapSetUp(mapState(['counter', 'name']))


// 通过点击函数一步步触发状态管理
function increment() {
  //提交mutation，去改变state
  // store.commit('increment', 1)
  store.commit({
    type: 'increment',
    add: 4
  })
}
function CNA() {
  //配发mutation
  store.dispatch('changeNameAction', {
    name: 'james',
    level: 100
  }).then(res => {
    console.log(res)
    //触发函数会回调
  })
}
</script>

<script>
export default {
  //这样的可以直接使用，相当于自己定义
  //直接将store定义好的解构出来
  computed: {
    ...mapState(['level']),
    ...mapGetters(['fullName'])
  },
  methods: {
    ...mapMutations(['changeName']),
    ...mapActions(['changeNameAction'])
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
  })">kobe</button>
  <p><button @click="CNA">james</button></p>
  <button @click="changeNameAction({
    name: 'liudehua1',
    level: 300
  })">liudeh</button>
</template>


<style scoped></style>