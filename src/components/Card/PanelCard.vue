<template>

<v-card    elevation="14" class="panel-card">
  <slot>

  </slot>
</v-card>
</template>

<script>
export default {
  name: "PanelCard"
}
</script>

<style scoped>
.panel-card{
 margin-top:30px;
 padding:10px;
}
</style>