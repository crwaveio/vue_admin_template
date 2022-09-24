<template>
  <v-list
      dense
  ><slot></slot>
    <v-list-item
        v-for="item in items"
        :key="item.title"
        link
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.title"></v-list-item-title>
      </v-list-item-content>


    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "SidebarList",
  data: () => ({

    items: [
      { title: 'Home', icon: 'mdi-view-dashboard' },
      { title: 'Forms', icon: 'mdi-form-select' },
      { title: 'Charts', icon: 'mdi-chart-line' },
      { title: 'Alerts', icon: 'mdi-alert-octagon' },
      { title: 'Datatable', icon: 'mdi-file-table' },


    ],
  }),
}
</script>

<style scoped>
.v-list{
  max-height:100vh;
  overflow-y:auto;

}
</style>