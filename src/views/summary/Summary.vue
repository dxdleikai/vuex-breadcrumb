<!--
* author: leikai
* created: 2020/5/26
* describe: 首页
-->
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

<style scoped lang="scss">

</style>