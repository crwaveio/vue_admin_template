<template>
  <div  data-app  :style="{ background:this.color!=null ? this.color : '#eeeeee', minHeight: 100 + 'vh' }">

    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageContainer",
  props: ['color'],




}
</script>

<style scoped>

</style>