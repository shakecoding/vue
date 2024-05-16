<template>
  <!-- 전역 컴포넌트 테스트 -->
  <!-- <Checkbox /> -->

  <!-- 지역 컴포넌트 테스트 -->
  <h1>App 테스트</h1>
  <ul>
    <Checkbox v-for="idol in idols" :key="idol.id" 
      :id="idol.id" :name="idol.name" :checked="idol.checked" />
  </ul>
</template>

<script>
import Checkbox from './components/Checkbox.vue';

  // 이거 먼저 적으면 위에 거 자동완성 됨.
  export default {
    name : 'App',
    components : {Checkbox},

    data() {
      return {
        idols : [
          { id:1, name:"BTS", checked:true},
          { id:2, name:"Black Pink" },
          { id:3, name:"EXO" },
          { id:4, name:"ITZY" },
        ]
      }
    }
  }
</script>

