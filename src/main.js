import Vue from "vue";
import "./style.css";
import Overview from "./components/OverView.vue";

import VueResource from "vue-resource";
Vue.use(VueResource);

import moment from "moment-timezone";
import { checkFilter } from "./util/bus.js";
moment.tz.setDefault("UTC");
Object.defineProperty(Vue.prototype, "$moment", {
  get() {
    return this.$root.moment;
  }
});

const bus = new Vue();
Object.defineProperty(Vue.prototype, "$bus", {
  get() {
    return this.$root.bus;
  }
});

//import vue router
import VueRouter from "vue-router";
import routes from "./util/routes.js";
Vue.use(VueRouter);
const router = new VueRouter({
  routes
});

new Vue({
  el: "#app",
  data: {
    genre: [],

    time: [],
    movies: [],
    moment,
    day: moment(),
    bus
  },

  created() {
    this.$http.get("/api").then(respnse => {
      this.movies = respnse.data;
    });
    this.$bus.$on("check-filter", checkFilter.bind(this));
  },
  router
});
