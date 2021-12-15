import Vuex from "vuex";
import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import project from "./project";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    banner,
    setting,
    project,
  },
  strict: true,
});
