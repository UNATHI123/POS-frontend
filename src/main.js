import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugin/font-awesome'
// import 'animate.css';

createApp(App).use(store).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
