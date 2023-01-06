<template>
<div>
  <v-card-text v-if="this.title!=NULL">
    <div style="font-size: 24px;color:#0dcaf0;">{{this.title}}</div>
  </v-card-text>
</div>
</template>

<script>
export default {
  name: "PanelTitle",
  props: ['title'],

}
</script>

<style scoped>

</style>