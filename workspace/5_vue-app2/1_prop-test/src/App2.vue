<template>
  <!-- 전역 컴포넌트 테스트 -->
  <!-- <Checkbox /> -->

  <!-- 지역 컴포넌트 테스트 -->
  <h1>App 테스트</h1>
  <ul>
    <!-- 이 방식은 전달해야할 속성이 많다면, 비효율적일 수 있다! -->
    <Checkbox v-for="idol in idols" :key="idol.id" :idol="idol"/>
  </ul>
</template>

<script>
import Checkbox from './components/Checkbox2.vue';

  // 이거 먼저 적으면 위에 거 자동완성 됨.
  export default {
    name : 'App2',
    components : {Checkbox},

    data() {
      return {
        idols : [
          { id:1, name:"BTS", checked:true},
          { id:2, name:"Black Pink", checked:true },
          { id:3, name:"EXO" },
          { id:4, name:"류호근" },
        ]
      }
    }
  }
</script>

