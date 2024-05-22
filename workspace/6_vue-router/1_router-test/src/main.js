import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// npm install vue-router
// npm install bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router).mount('#app');
