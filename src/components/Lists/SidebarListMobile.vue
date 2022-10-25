<template>

<SidebarList>
    <b-navbar-brand class="logo" href="#" style="padding-left: 15px;">
      <img :src="`${publicPath}assets/images/logo.png`">
    </b-navbar-brand>
</SidebarList>

</template>
<script>
import SidebarList from "@/components/Lists/SidebarList";
export default {
  name: "SidebarListMobile",
  components: {SidebarList},
  data: function () {
    return {
      publicPath: process.env.BASE_URL,

    }
  },
}

</script>

<style scoped>

</style>