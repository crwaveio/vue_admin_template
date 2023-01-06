<template>

<v-card    elevation="14" class="panel-card">
<panel-title v-if="this.title!=null" :title="this.title"></panel-title>
  <slot>

  </slot>
</v-card>
</template>

<script>
import PanelTitle from "@/components/Titles/PanelTitle.vue";

export default {
  name: "PanelCard",
  components: {PanelTitle},
  props: ['title'],
}
</script>

<style scoped>
.panel-card{
 margin-top:30px;
 padding:10px;
  width:100%;
}
</style>