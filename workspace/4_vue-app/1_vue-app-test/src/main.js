import './assets/main.css'

// createApp 이라는 함수를 vue 패키지에서 가지고 온다.
// 자바스크립트 문법
import { createApp } from 'vue'

// 해당 경로의 값들을 App 이라는 이름으로 가져온다.
// 이름은 대게 vue 의 name 그대로 작성!
import App from './App.vue'

createApp(App).mount('#app')
