# 实现一个简单的 vue-router

## 需求分析

- spa 应用页面不应该刷新
  - hash，在路由后面加上 `#/about`，这样页面不会刷新
  - History api `/about`
- 根据 url 去显示对应的内容
  - `router-view`
  - 数据响应式：`current`变量持有`url`地址，响应式的去动态执行`render`函数
- 解决嵌套路由

## 任务

- 实现一个插件
  - 实现 VueRouter 的类
    - 处理路由选项
    - 监听`url`的变化，利用`hashchange`
    - 响应`url`的变化
  - 实现`install`方法
    - `$router`注册
    - 两个全局组件
  - 嵌套路由
    - `router-view`深度标记
    - 路由匹配时获取代表深度层级的`matched`数组
