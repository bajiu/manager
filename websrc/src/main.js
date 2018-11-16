import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store/index";
// import VueToast from "./plugins/vue-toast/toast";
import { post, fetch, patch, put, createBill, dot } from "./http";
// import VideoPlayer from "vue-video-player";
// require("video.js/dist/video-js.css");
// require("vue-video-player/src/custom-theme.css");
// Vue.use(VideoPlayer);
// Vue.use(VueToast);
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)


// 定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$createBill = createBill;
Vue.prototype.$dot = dot;

Vue.config.productionTip = false;
window.CURRENTMODE = process.env.VUE_APP_CURRENTMODE;

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount("#app");
