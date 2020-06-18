<!--
* author: leikai
* created: 2020/5/26
* describe: 面包屑
-->
<template>
   <div class="breadcumb">
    <div class="breadcumb-list">
      <div v-for="(item, i) in breadcrumb.list" :key="i" class="breadcumb-link" :class="{last: i == breadcrumb.list.length -1}">
        <router-link :to="{path: item.path}">{{item.name}}</router-link>
        <span v-if="i < breadcrumb.list.length - 1"> &gt; </span>
      </div>
    </div>
  </div>   
</template>

<script>
    import { mapState } from 'vuex'
    export default {
      name: "breadcrumb-self",
      computed: {
        ...mapState(['breadcrumb'])
      }
    }
</script>

<style scoped lang="scss">
$baseColor: #fc9153;
  .breadcumb{
    margin-bottom: 22px;
    .breadcumb-list {
      .breadcumb-link{
        display: inline-block;
        a{
          color: #666;
          font-size: 12px;
        }
        span{
          padding: 0 3px;
        }
        &.last{
          a{
            color: $baseColor
          }
        }
      }
    }
  }

</style>