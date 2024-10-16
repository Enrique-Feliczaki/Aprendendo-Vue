import { createApp } from "vue";
import App from "./App.vue";
import axios from 'axios';
import VueAxios from 'vue-axios';

import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

createApp(App) .use(VueAxios, axios).use(store).use(router) .mount("#app");
