import { createRouter, createWebHistory } from 'vue-router'

// 골뱅이를 쓴 이유는 vite.config 보면서 설명!
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Members from '@/pages/Members.vue'
import Videos from '@/pages/Videos.vue'

const router = createRouter({ // 라우터 인스턴스 생성
    history: createWebHistory(), // html5 히스토리 모드를 사용, URL 변경을 처리하는 함수!
    routes : [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/members', component: Members },
        { path: '/videos', component: Videos },
    ]
})

export default router;