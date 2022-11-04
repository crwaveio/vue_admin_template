<template>
  <v-app>

        <div id="app">
          <page-container>

          <base-page v-if="this.$route.name!='login'">
          <router-view/>
          </base-page>
            <router-view v-else/>

          </page-container>

        </div>
  </v-app>

</template>

<style lang="scss">

@import "//cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css";
.v-application--wrap {
  min-height: 0vh !important;
}
a { text-decoration: none; }

.v-list-group--sub-group .v-list-group__header {
  padding-left:15px !important;
}


.v-list{
  overflow-x: hidden !important;
}
.v-list-group--sub-group.v-list-group--active .v-list-item__icon.v-list-group__header__prepend-icon .v-icon {
  transform: rotate(-0deg) !important;
}
label {
  margin-bottom: 0.0rem !important;
}
</style>
<script>
import BasePage from "@/components/BasePage";
import PageContainer from "@/components/PageContainer";
export default {
  components: {PageContainer, BasePage}
}
</script>