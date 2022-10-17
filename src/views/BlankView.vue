<template>
<page-container>
  <base-page>
  </base-page>
</page-container>





</template>

<script>
import BasePage from "@/components/BasePage";
import PageContainer from "@/components/PageContainer";
export default {
  name: "BlankView",
  components: {PageContainer, BasePage},
  metaInfo: {
    title: 'Blank',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
}

</script>

<style scoped>

</style>