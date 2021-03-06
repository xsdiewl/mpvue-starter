import Vue from "vue";
import App from "./index.vue";

const app = new Vue(App);
app.$mount();

export default {
  config: {
    navigationBarTitleText: "干货-福利",
    enablePullDownRefresh: false,
    backgroundTextStyle: "light"
  } as mpc.PageConfig
};
