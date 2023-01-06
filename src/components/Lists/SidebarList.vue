<template>
  <v-list
dense
  ><slot></slot>

    <v-list-item
        v-for="item in items"
        :key="item.title"
        :to="item.link"
        link
        style="text-decoration: none;"

    >
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-title style="margin-left: -16px;" v-text="item.title"></v-list-item-title>



    </v-list-item>

    <v-list-group
        :value="false"

        prepend-icon="mdi-cube"
        sub-group
        :active="false"
    >
      <template v-slot:activator>

        <v-list-item-title>{{$t("components")}}</v-list-item-title>
        <v-icon>mdi-chevron-down</v-icon>
      </template>

      <v-list-item
          v-for="component in components"
          :key="component.title"
          :to="component.link"
          style="text-decoration: none;"

          link
      >
        <v-list-item-icon>
          <v-icon v-text="component.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title v-text="component.title"></v-list-item-title>



      </v-list-item>
    </v-list-group>



  </v-list>
</template>

<script>
export default {
  name: "SidebarList",

  computed: {
    items() {
      var items = [
        {title: this.$i18n.t('home'), icon: 'mdi-view-dashboard', link: '/'},
        {title: this.$i18n.t('blank'), icon: 'mdi-file-alert-outline', link: '/blank'},



      ];
      return items;
    },

    components(){
      var components = [
        {title: this.$i18n.t('forms'), icon: 'mdi-form-select', link: '/forms'},
        {title: this.$i18n.t('form_elements'), icon: 'mdi-form-select', link: '/form-elements'},
        {title: this.$i18n.t('charts'), icon: 'mdi-chart-line',link: '/charts'},
        {title: this.$i18n.t('alerts'), icon: 'mdi-alert-octagon', link: '/alerts'},
        {title: this.$i18n.t('datatable'), icon: 'mdi-file-table',link: '/datatable'},
        {title: this.$i18n.t('interactive_datatable'), icon: 'mdi-file-table',link: '/interactive-datatable'},
        {title: this.$i18n.t('interactive_datatable_paginated'), icon: 'mdi-file-table',link: '/interactive-datatable-paginated/1'}

      ];
      return components;

    }
  }
}
</script>

<style scoped>

.v-list{
  max-height:80vh;
  overflow-y:auto;


}


.v-list-group--sub-group.v-list-group--active .v-list-item__icon.v-list-group__header__prepend-icon .v-icon {
  transform: rotate(-0deg);
}

.v-application--is-ltr .v-list-group--sub-group .v-list-group__items  .v-list-item{
  padding-left: 15px;
}
.v-list-group--sub-group{
  margin-left: 0px !important;
}
@media only screen and (max-width: 600px) {
  .v-list{
    max-height:100vh;



  }
}
</style>