// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
//
// import { createApp } from 'vue'
// // import App from './App.vue'
// import App from './App2.vue'
//
// createApp(App).mount('#app')

// 리시버 센더 추가후에는 밑에 거
import { createApp } from 'vue'

import App from './App2.vue'

// 라이브러리 가져오기
import mitt from 'mitt';

// 에미터 인스턴스 생성
const emitter =  mitt();

// 모든 이벤트에 대해 리스너를 설정!
// 이벤트가 발생할 때마다 이벤트의 타입과 이벤트 객체를 콘솔에 로그로 출력하겠다!
// 디버깅 목적으로 작성!
emitter.on('*', (type, e) => console.log(`## 이벤트 로그 : ${type} -> `, e) )

// 에미터를 어떤 컴포넌트에서든 사용할 수 있도록 전역으로 추가!
const app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.mount("#app");
