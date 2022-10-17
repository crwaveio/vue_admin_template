<template>
  <v-list
      dense
      v-scroll
  ><slot></slot>
    <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        link
        style="text-decoration: none;"
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

  computed: {
    // a computed getter
    items() {
     var items= [
        { title: this.$i18n.t('home'), icon: 'mdi-view-dashboard',link:'/' },
        { title:this.$i18n.t('login'), icon: 'mdi-login',link:'/login' },
        { title: this.$i18n.t('blank'), icon: 'mdi-file-alert-outline',link:'/blank' },
        { title:this.$i18n.t('forms'), icon: 'mdi-form-select' },
        { title: this.$i18n.t('charts'), icon: 'mdi-chart-line' },
        { title: this.$i18n.t('alerts'), icon: 'mdi-alert-octagon' },
        { title: this.$i18n.t('datatable'), icon: 'mdi-file-table' },


      ];
      return items;
    }
  }

}
</script>

<style scoped>

.v-list{
  max-height:80vh;
  overflow-y:auto;


}

</style>