<!--
* author: leikai
* created: 2020/5/26
* describe: 用于登录后的页面
-->
<template>
  <div class="layout-three">
    <div class="layout-three-side fl">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-nav"
        @open="handleOpen"
        @close="handleClose"
        text-color="#fff"
        active-text-color="#000"
        router
      >
        <el-menu-item index="summary">
          <i class="fa fa-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="taskMgmt">
          <i class="fa fa-list"></i>
          <span slot="title">时间管理</span>
        </el-menu-item>
        <el-submenu index="3">
          <template slot="title">
            <svg
              t="1590574667189"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="3879"
              width="20"
              height="20"
              style="margin-left: -4px;"
            >
              <path
                d="M435.73767 653.351702l54.765246 54.664962 195.557712-195.499384-195.557712-195.549526-54.765246 54.723291 101.692998 101.63467L158.029018 473.325716l0 78.324801 379.40165 0L435.73767 653.351702zM783.851765 160.502347 236.296515 160.502347c-43.036122 0-78.266473 35.173046-78.266473 78.149816l0 156.523736 78.266473 0 0-156.523736 547.55525 0 0 547.671907L236.296515 786.32407l0-156.465408-78.266473 0 0 156.465408c0 43.026913 35.231374 78.209168 78.266473 78.209168l547.55525 0c42.976771 0 78.208145-35.182255 78.208145-78.209168l0-547.671907C862.058886 195.675392 826.828535 160.502347 783.851765 160.502347"
                p-id="3880"
                fill="#e6e6e6"
              />
            </svg>
            <span>用户管理</span>
          </template>
          <el-menu-item index="videoSource">
            <span slot="title">编辑人员</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="server-time">
        <i class="fl fa fa-clock-o"></i>
        <div class="fl">
          <p>{{time | timeYMD}}</p>
          <p>{{time | timeHMS}}</p>
        </div>
      </div>
    </div>
    <div class="layout-three-main fl">
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
// import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "layoutThree",
  components: {},
  data() {
    return {
      activeIndex: "",
      time: null
    };
  },
  filters: {
    timeYMD(x) {
      return moment(x).format("YYYY/MM/DD");
    },
    timeHMS(x) {
      return moment(x).format("HH:mm:ss");
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    /*
     * params: 无
     * return: 无
     * function: 初始化方法
     * */
    init() {
      let pathArr = this.$route.path.split("/");
      this.activeIndex = pathArr[1];
    },
    /*
     * params: 无
     * return: 无
     * function: 菜单选择
     * */
    handleSelect(key, keyPath) {
      this.$router.push(key);
    }
  },
  created() {
    // this.$store.dispatch("index/setMenu", menu);
  },
  mounted() {
    this.init();
  },
  updated() {
    this.init();
  },
  computed: {
    // ...mapState({
    //   menu: state => state.index.menu
    // })
  },
  mounted() {
    // todo，server time replaces native time;
    this.time = new Date();
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
};
</script>
<style lang="scss">
// 不使用scoped方可重写element.ui的样式
@import "../style/variables.scss";
.layout-three {
  .server-time {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 60px;
    width: 208px;
    color: #fff;
    background: #333;
    .fa {
      font-size: 34px;
      line-height: 60px;
      margin: 0 15px;
    }
    div {
      height: 60px;
      margin-left: 10px;
    }
    p {
      font-weight: bold;
      margin: 0;
      line-height: 30px;
    }
  }
  .el-menu-nav {
    height: calc(100vh - 111px);
    overflow-y: auto;
  }
  svg {
    margin-right: 4px;
  }
  .layout-three-side {
    position: relative;
    width: 210px;
    border-right: 1px solid #e6e6e6;
    min-height: calc(100vh - 50px);
    border-top: 1px solid #999;
    .child-menu {
      height: 100%;
      overflow-y: auto;
      border-top: 1px solid $lineC;
      background: none;
    }
    .menu-icon {
      margin-right: 5px;
    }
    .menu-text {
      display: inline-block;
      width: 95%;
    }
  }
  .layout-three-main {
    width: calc(100vw - 210px);
    overflow-y: auto;
  }
}

.el-menu {
  background-color: $bgC;
  .fa {
    color: #fff;
    margin-right: 4px;
    font-size: 16px;
  }

  .fa-warning {
    font-size: 12px;
    margin-left: -17px;
  }
}
.el-menu-item {
  span {
    color: $lineC;
  }
  height: 46px;
  line-height: 46px;
  .el-icon-s-order {
    color: #fff;
    margin-left: -6px;
  }
  &:hover:not(.is-active) {
    border-left: 6px solid $mainC;
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    background-color: #fff !important;
    color: $navHC;
    .fa,
    svg,
    .el-icon-s-order
     {
      color: $navHC;
      margin-left: -6px;
    }
    .el-icon-s-order {
      margin-left: -12px;
    }
    .fa-warning {
      margin-left: -17px;
    }
  }
  &.is-active {
    background-color: $mainC !important;
    .fa,
    .el-icon-s-order {
      color: #fff !important;
    }
  }
}

.el-submenu ul {
  background-color: #222 !important;
  .el-menu-item:hover:not(.is-active) span {
    margin-left: 10px;
    color: $navHC;
  }
}

.el-submenu__title {
  span {
    color: $lineC;
  }
  height: 46px !important;
  line-height: 46px !important;
  i {
    color: #fff !important;
    font-size: 14px;
  }
  .el-submenu__icon-arrow {
    color: #fff !important;
    font-size: 14px;
  }
}
.el-menu-item,
.el-submenu__title {
  height: 46px !important;
  line-height: 46px !important;
}

.el-submenu .el-menu-item {
  background-color: #222;
  span {
    margin-left: 16px;
    color: #fff;
  }
}

.el-submenu .el-submenu__title:hover {
  background-color: #333 !important;
}
</style>