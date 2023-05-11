/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import { registerPlugins } from "@/plugins";
import router from "./routers/index.js";
import store from "./store/index.js";
import axios from "axios";

// axios 전역 설정
axios.defaults.baseURL = "http://13.124.4.157:8081";

const app = createApp(App);

registerPlugins(app);

app.use(router);
app.use(store);
app.mount("#app");
