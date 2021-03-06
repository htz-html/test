import Vue from "vue";
import Button from "./button.vue";
import Icon from "./icon.vue";
import { expect } from "chai";

Vue.component("g-button", Button);
Vue.component("g-icon", Icon);

new Vue({
  el: "#app",
  data() {
    return {
      loading1: true,
    };
  },
});