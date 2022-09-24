<template>
  <div>
    <div class="d-flex">
      <div class="mr-auto p-2">

        <h3 class="tab-title-h3" >{{title}}</h3></div>
      <div class="p-2">
        <div class="tabs-menu-title">
        <template v-for="tab in tabs" >
        <div class="tab-links-li" :key="tab.componentOptions.propsData.name"   @click="selectTab(tab)" :class="{ 'is-active': tab.child.isActive }">
          <div style="font-size: 14px;color:white;font-family:'Arial Black';">{{tab.componentOptions.propsData.name}}</div>
        </div>
      </template>
          </div>
      </div>
      <div class="tabs-menu-title-mobile">

        <v-select
            v-model="selectd"
            :items="tabs"
            outlined
            return-object
            item-text="componentOptions.propsData.name"

        ></v-select>
      </div>
    </div>

    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabsComp",
  props: ["title"],
  data() {
    return {
      tabs: [] ,
      selectedtab:null,
      selectd:this.$slots.default[0].componentOptions.propsData.name,
      fTab:""

    };
  },

  created() {

    this.tabs = null;


    //  console.log(this.$children.filter((x => x.isActive!=null)));

  },
  mounted() {
    this.tabs=this.$slots.default;
    

    this.tabs.forEach(tab => {
      //console.log(tab.componentOptions.propsData.name);
      console.log(tab)
      if(tab.child.isActive) {

        this.selectedtab = tab.componentOptions.propsData.name;

      }
    });
  },

  watch: {
    selectd(selectedtab) {

    this.selectTab(selectedtab);
    }
  },methods: {
    selectTab(selectedTab) {
      this.selectd=selectedTab
      this.tabs.forEach(tab => {
        tab.child.isActive = (tab.componentOptions.propsData.name == selectedTab.componentOptions.propsData.name);
        if(tab.child.isActive){
          this.selectedtab = tab.componentOptions.propsData.name;
          this.selected=tab.componentOptions.propsData.name;

        }
      });
    },

  }
}
</script>

<style scoped>
.tab-links{
  color: white;
  font-size: 12px;
  cursor:pointer;

}
.tab-title-h3{
  font-size: 14px;
  color:#0dcaf0;
}
.tab-name-h3{
  font-size: 20px;
}
.tab-links-li:first-child{
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  border-left:1px solid  #0dcaf0;

}
.tab-links-li{
  display: inline-block;
  width:auto;
  padding: 8px;
  border-right:1px solid  #0dcaf0;
  border-bottom: 1px solid  #0dcaf0;
  border-top: 1px solid  #0dcaf0;
  cursor:pointer;
  background-color: #2db9e0;

}
.is-active{
  padding: 9px;
  background-color: #0dcaf0;
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
}



.tab-links-li:last-child{
  border-right:1px solid  #0dcaf0;

  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;

}

.tabs-title{
  float:left;
  padding: 10px;

}

.tabs-menu-title-mobile{
  float:right;
  display: none;
}
.tabs{
  width: 100%;
  min-height: 50px;
  height: auto;
}
@media only screen and (max-width: 600px) {

  .tabs-menu-title{
    display: none;
  }
  .tabs-menu-title-mobile{
    display:block;
  }

}
</style>
