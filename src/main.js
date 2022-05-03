import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.scss";
import "remixicon/fonts/remixicon.css";
import ElementUI from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-tw";
import naive from "naive-ui";
import zhTW from "naive-ui";

import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.css";
UIkit.use(Icons);

createApp(App)
  .use(store)
  .use(router)
  .use(ElementUI, { locale })
  .use(naive, { zhTW })
  .mount("#app");
/*const app = createApp(App);
app.use(ElementUI, { locale });
app.use(router);
app.use(store);
app.mount("#app");*/
