import Vue from "vue";
import Vuex from "./yVuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    counter: 0,
  },
  mutations: {
    add(state) {
      state.counter++;
    },
  },
  actions: {
    add({ commit }) {
      // 此处使用setTimeout嵌套了一个commit
      // 实际在Store中的commit方法使用到了this
      // 这样在这里的this已经不再指向Store实例，会导致错误
      // 所以在Store实例中需要对this绑定一个指向
      setTimeout(() => {
        commit("add");
      }, 1000);
    },
  },
});
