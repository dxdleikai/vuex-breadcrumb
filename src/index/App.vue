<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    /*
    * params: 无
    * return: 无
    * function: 初始化
    * */
    init() {
      sessionStorage.removeItem('messageBoxFlag')
    },
    /*
    * params: 无
    * return: 无
    * function: 处理ie路由
    * */
    ieRouter() {
      let isIE = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
      if (isIE) {
        window.addEventListener('hashchange', () => {
          let currentPath = window.location.hash.slice(1)
          if (this.$route.path !== currentPath) {
            this.$router.push(currentPath)
          }
        }, false)
      }
    }
  },
  mounted() {
    this.init()
    this.ieRouter()
  }
}
</script>


<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
