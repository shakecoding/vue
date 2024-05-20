<template>
  <!-- 전역 컴포넌트 테스트 -->
  <!-- <Checkbox /> -->

  <!-- 지역 컴포넌트 테스트 -->
  <h1>App 테스트</h1>
  <ul>
    <!-- 이 방식은 전달해야할 속성이 많다면, 비효율적일 수 있다! -->
    <Checkbox v-for="idol in idols" :idol="idol"/>
  </ul>
</template>

<script>
import Checkbox from './components/Checkbox4.vue';
import Idol from './idol.js';

  // 이거 먼저 적으면 위에 거 자동완성 됨.
  export default {
    name : 'App4',
    components : {Checkbox},

    data() {
      return {
        idols : [
            new Idol(1, "BTS", true),
            new Idol(2, "블핑", false),
            new Idol(3, "류호근", false),
            new Idol(4, "제이팍", '류호근'),
        ]
      }
    }
  }
</script>

