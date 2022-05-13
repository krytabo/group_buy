import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.scss";
import "./assets/tailwind.css";
import "remixicon/fonts/remixicon.css";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-tw";
import naive from "naive-ui";
import zhTW from "naive-ui";
import Vue3Lottie from "vue3-lottie";
import "vue3-lottie/dist/style.css";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
UIkit.use(Icons);

createApp(App).use(store).use(router).use(ElementUI, { locale }).use(naive, { zhTW }).use(Vue3Lottie).use(VueSweetalert2).mount("#app");
/*const app = createApp(App);
app.use(ElementUI, { locale });
app.use(router);
app.use(store);
app.mount("#app");*/
