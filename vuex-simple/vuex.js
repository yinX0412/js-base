// 1.实现插件
let _Vue;
class Store {
  constructor(options) {
    // 保存参数
    this._mutations = options.mutations;
    this._actions = options.actions;
    this._getters = options._getters;

    // 定义computed选项
    const computed = {};
    this.getters = {};
    const store = this;
    Object.keys(this._getters).forEach((key) => {
      // 获取用户定义的getter
      const fn = store._getters[key];
      // 转换为computed的形式，无参
      computed[key] = function () {
        return fn(store.state);
      };
      // 为getters定义只读属性
      Object.defineProperty(store.getters, key, {
        get: () => store._vm[key],
      });
    });
    // 创建响应式的state，通过将传入的Vue实例化，借鸡生蛋生成响应式数据，
    // this.$store = new _Vue()
    // 这种方式this.$store所得到的是一个Vue的实例，这是并不希望
    // 将实例传递给_vm，通过一个只读的state去获取数据
    // this.$store.state 实际上得到的就是this._vm._data.$$state
    this._vm = new _Vue({
      data() {
        return {
          // 不希望被代理 在参数的前面加_或者$$
          $$state: options.state,
        };
      },
      computed: computed,
    });
    // 修改this指向
    this.commit = this.commit.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }
  // this.$store.commit
  commit(type, payload) {
    // 获取type对应的mutation
    const fn = this._mutations[type];
    if (!fn) {
      console.error("undefined mutation");
      return;
    }

    fn(this.state, payload);
  }
  dispatch(type, payload) {
    // 获取type对应的mutation
    const fn = this._actions[type];
    if (!fn) {
      console.error("undefined action");
      return;
    }
    // actions的方法参数是当前的Store实例作为上下文
    // 其中有一个非常隐蔽的bug，见ystore.js调用处
    return fn(this, payload);
  }
  get state() {
    // _data中一般为监听器，
    return this._vm._data.$$state;
  }

  set state(v) {
    console.error("please user replaceState to reset state");
  }
}
function install(Vue) {
  _Vue = Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    },
  });
}
// 导出一个Vuex对象
export default { Store, install };
