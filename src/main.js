// import { createApp } from "vue";
// import App from "./App.vue";
// import "./style.css";

// createApp(App).mount("#app");

import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import App from "./App.vue";
import "./style.css";

// const queryClient = createClient();

// createApp(App).use(VueQueryPlugin).mount("#app");

const app = createApp(App);
app.use(VueQueryPlugin);
app.mount("#app");
