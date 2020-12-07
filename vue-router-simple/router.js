import RouterView from "./router-view";
// 实现vue插件
// 返回一个函数
// 或者返回一个对象，拥有一个install方法
let _Vue;
class Router {
  // 接受选项 routes - 路由表
  constructor(options) {
    this.$options = options;
    // 缓存path和route的映射关系
    // this.routeMap = {};
    // this.$options.routes.forEach(route => {
    //   this.routeMap[route.path] = route.component;
    // });
    // 定义一个响应式的current属性
    // const initialUrl = window.location.hash.slice(1) || '/';
    // _Vue.util.defineReactive(this, 'current', initialUrl);
    this.current = window.location.hash.slice(1) || "/";
    // 如果处理嵌套路由，则不是去监听current的变化

    // 定义一个响应式的matched
    _Vue.util.defineReactive(this, "matched", []);
    // matched方法可以递归便利路由表，获得匹配关系的数组
    this.match();
    // 监听路由的变化
    window.addEventListener("hashchange", this.onHashChange.bind(this));
  }
  match(routes) {
    routes = routes || this.$options.routes;

    for (const route of routes) {
      if (route.path === "/" && this.current === "/") {
        this.matched.push(route);
        return;
      }
      if (route.path !== "/" && this.current.indexOf(route.path) !== -1) {
        this.matched.push(route);
        if (route.children && route.children.length > 0) {
          this.match(route.children);
        }
        return;
      }
    }
  }
  onHashChange() {
    // 只获取#后面的内容
    this.current = window.location.hash.slice(1);
    this.matched = [];
    this.match();
  }
}
Router.install = function (Vue) {
  // 引用Vue的构造函数，在上面的Router中使用
  _Vue = Vue;
  // 1. 挂在$router
  Vue.mixin({
    beforeCreate() {
      // 这里的this指向Vue
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router;
      }
    },
  });
  // 2.定义两个全局组件
  Vue.component("router-link", {
    props: {
      to: {
        type: String,
        require: true,
      },
    },
    render(h) {
      //描述一个a标签
      return h(
        "a",
        {
          attrs: {
            href: "#" + this.to,
          },
        },
        this.$slots.default
      );
    },
  });
  Vue.component("router-view", RouterView);
};

export default Router;
