<!--
* author: leikai
* created: 2020/6/19
* describe: 首页
-->
<template>
  <div class="layout-two">
    <!-- 头部 -->
    <div class="layout-two-header fix">
      <router-link
        to="/home"
        class="title-cnt fl"
      >
        <h1 class="title">
          <span class="fl">{{title}}</span>
        </h1>
      </router-link>
      <div class="user-action fr">
        <span>{{userRealname}}</span>
        <i
          class="fa fa-sign-out fa-lg sign-out-icon"
          @click="logout"
        ></i>
      </div>
    </div>
    <!-- 导航 -->
    <nav-top class="layout-two-nav fl"></nav-top>
    <!-- 内容 -->
    <div class="layout-two-body fl">
      <router-view></router-view>
    </div>
    <!-- <div class="layout-two-footer"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import config from '../js/config'
import NavTop from './LayoutThree.vue';
export default {
  name: "layoutTwo",
  components: { NavTop },
  data() {
    return {
      title: 'USER SYSTEM',
      userRealname: 'admin'
    }
  },
  methods: {
   
    /*
    * params: 无
    * return: 无
    * function: 初始化方法
    * */
    init() {
      let userRealname = localStorage.getItem('userRealname')
      if (userRealname) {
        this.userRealname = userRealname
      }
    },
    /*
    * params: 无
    * return: 无
    * function: 退出登录
    * */
    logout() {
      this.$confirm('您确定要退出登录吗?', '信息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
      }).catch(() => {

      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style scoped lang="scss">
@import "../style/variables.scss";
.layout-two {
  margin: 0 auto;
  background: #fff;
  .layout-two-header {
    height: 50px;
    padding: 0 20px;
    background: $bgC;

    .title-cnt {
      margin-top: 10px;
    }
    .title {
      font-size: 16px;
      font-weight: bold;
      color: $lineC;
    }
    .user-action {
      line-height: 50px;
      color: #fff;
      .sign-out-icon {
        color: #979797;
        margin-left: 10px;
        cursor: pointer;
        &:hover {
          color: $mainC;
        }
      }
    }
  }
  .layout-two-nav {
    width: 210px;
  }
  .layout-two-body {
    width: calc(100vw - 210px);
    height: calc(100vh - 50px);
    background: #f2f2f2;
    overflow-y: auto;
    overflow-x: hidden;
  }
}
</style>
