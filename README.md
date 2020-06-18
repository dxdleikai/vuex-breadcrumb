# 用户管理系统

> 面包屑提取使用vuex来保存，保存在src/components/Breadcrumb.vue。
> 路由中配置meta.list,见src/index/router.js。
> 本例只使用了一级路由，目的只是提取面包屑组件，想要多级路由的，在导航菜单加入多级，路由配置多级，在list中写入想要展示的面包屑级别。
> 各组件使用是只需要import,注入components,在html中使用。

### usage
```
<template>
  <div class="summary-page">
    <Bread />
    <div>
      这是首页
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Bread from '@/components/Breadcrumb';
export default {
  name: "Summary",
  components: {Bread}
};
</script>
```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
