<template>
  <v-app>
        <div id="app">
          <router-view/>
        </div>
  </v-app>

</template>

<style lang="scss">

@import "//cdn.jsdelivr.net/npm/@mdi/font@6.9.96/css/materialdesignicons.min.css";
#app{
  background-color: #eeeeee;
  padding-bottom: 20px;
}
.v-application--wrap {
  min-height: 0vh !important;
}

</style>
