<template>
  <v-app>
        <div id="app">
          <router-view/>
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

</style>
