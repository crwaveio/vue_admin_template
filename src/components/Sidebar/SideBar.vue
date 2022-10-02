<template>
    <div>

        <div id="sidebar" @mouseenter="esidebar" @mouseleave="dsidebar">
            <div class="card sidebar-menu-item">
                <b-navbar-brand class="logo" href="#" style="padding-left: 10px;">
                    <img src="/logo.png">
                </b-navbar-brand>

                        <v-navigation-drawer
                            floating
                            permanent

                        >
<SidebarList></SidebarList>
                        </v-navigation-drawer>





        </div>
        </div>

        <div  id="content-div">

<div style="height:10px;"></div>
            <v-toolbar dense rounded style="margin-left: 10px;margin-right:10px;" >
              <div class="sidebar-toggle-button"
              >
                <v-icon
                    medium
                    @click="togglesidebar"
                    style="padding: 10px"
                >
                  mdi-menu
                </v-icon>
              </div>
              <div class="sidebar-toggle-button-mobile">

                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
              </div>

              <v-spacer></v-spacer>

              <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
              </v-btn>

              <v-btn icon>      <v-badge
                  bordered
                  bottom
                  color="bg-primary"
                  content="6"
                  offset-x="9"
                  offset-y="9"

              >
                <v-icon>mdi-message</v-icon>
              </v-badge>

              </v-btn>

              <v-btn icon>
                <custom-avatar></custom-avatar>
              </v-btn>

            </v-toolbar>

          <v-navigation-drawer
              v-model="drawer"
              absolute
              temporary
          >
<SidebarListMobile></SidebarListMobile>
          </v-navigation-drawer>
            <div style="padding-left: 20px;padding-right: 20px;">
                <slot>

                </slot>
            </div>

            </div>
    </div>
</template>

<script>


import SidebarList from "@/components/Lists/SidebarList";
import SidebarListMobile from "@/components/Lists/SidebarListMobile";
import CustomAvatar from "@/components/Avatar/CustomAvatar";
export default {
    name: 'SideBar',
    components: {SidebarListMobile, SidebarList,CustomAvatar},
    data: () => ({
      drawer: false,
      group: null,
        sidebaractive:0,


    }),
  watch: {
    group () {
      this.drawer = false
    },
  },
   mounted() {



       /*

       var togglewidth=724;
      window.addEventListener('resize', () => {
      //    this.windowHeight = window.innerHeight
          var demo=   document.getElementById("demo");
          if(window.innerWidth < togglewidth && demo.className=="in") {
              demo.classList.toggle("in");
          }
          if(window.innerWidth > togglewidth && demo.className!="in") {
              demo.classList.toggle("in");
          }
      });
      window.addEventListener('load', () => {
          //    this.windowHeight = window.innerHeight
          var demo=   document.getElementById("demo");
          if(window.innerWidth < togglewidth && demo.className=="in") {
              demo.classList.toggle("in");
          }
          if(window.innerWidth > togglewidth && demo.className!="in") {
              demo.classList.toggle("in");
          }
      });
*/

    },

    methods: {
        togglesidebar() {

            var sidebar=  document.getElementById("sidebar");
            var contentdiv=document.getElementById("content-div");
            contentdiv.classList.toggle("in");
            sidebar.classList.toggle("in");
            if(sidebar.className=="in") {
                this.sidebaractive = 1;
            }else{
                this.sidebaractive=0;
            }


        },
      togglesidebarmobile(){



      },
        esidebar(){
            var sidebar=  document.getElementById("sidebar");
            var contentdiv=document.getElementById("content-div");

            if(sidebar.className=="in"){
               contentdiv.classList.toggle("in");
               sidebar.classList.toggle("in");
               var sidebartext=  document.getElementsByClassName("sidebar-menu-text");
               for (var i = 0; i < sidebartext.length; i++) {
                   sidebartext[i].classList.toggle("in");
               }
               var listgroupitem=  document.getElementsByClassName("sidebar-li-item");
               for (i = 0; i < listgroupitem.length; i++) {
                   listgroupitem[i].classList.toggle("in");
               }
            }
        },
        dsidebar(){
            var sidebar=  document.getElementById("sidebar");
            var contentdiv=document.getElementById("content-div");

            if(this.sidebaractive){
                sidebar.classList.toggle("in");
                contentdiv.classList.toggle("in");

            }
        }
}
}
</script>

<style lang="scss">

.v-list--rounded{
    padding: 0px;
}
.ps {
    max-height: 100%;
    background-color: #0a53be;
padding-right:10px;}


#demo {
    -webkit-transition: width 10s ease;
    -moz-transition: width 10s ease;
    -o-transition: width 10s ease;
    transition: width 10s ease;

    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    background: yellow;
    vertical-align: middle;
    width: 299px;
}
#demo.in {
    width:70px;
}
.sidebar-text{
    float:left;
    width:150px;
    height: 50px;

}
.sidebar-menu-text{
    font-size: 16px;
    font-family: "Andale Mono";
    color:#2dcad4;
}
.sidebar-menu-icon{

}

.content{
    flex-grow: 1;
    text-align: center;


}
.sidebar-toggle-button-mobile{display: none;}
.sidebar-toggle-button{display:block;}

.sidebar-li-item{
width: auto;
    height: auto;
    display: inline-block;
//border-bottom: 1px black solid;
}
.sidebar-li-item:hover{
    background-color:yellow ;
    cursor: pointer;
}
.list-group-icon{
 width: 100%;
}
.list-group-icon:not(:only-child){
    width:75%;
}

.sidebar-li-item{
        padding: 20px;
     //   border-bottom: 1px solid red;
}
.sidebar-li-item:last-child { border-bottom: none; }

.card{
    border: none;
   // border: 1px solid red;

}
#sidebar{
    position: fixed;
    z-index: 1;
    height:100%;
    width: 230px;

  float:left;padding: 10px;
    -webkit-transition: width 300ms ease;
    -moz-transition: width 300ms ease;
    -o-transition: width 300ms ease;
    transition: width 300ms ease;


}
#content-div{
    margin-left: 230px;
    -webkit-transition: width 300ms ease;
    -moz-transition: width 300ms ease;
    -o-transition: width 300ms ease;
    transition: width 300ms ease;


}
.sidebar-menu-item{

  overflow: hidden;
  width:100%;
}
.main{display: flex;float:left;}
.col-1, .col-3 {
    flex: 0 0 100px;
}
.col-2 {
    flex-grow: 1;
}
.sidebar-menu-text.in{
    display:none;
}
.sidebar-li-item.in{
    justify-content: center;
}
#sidebar.in{
    -webkit-transition: width 300ms ease;
    -moz-transition: width 300ms ease;
    -o-transition: width 300ms ease;
    transition: width 300ms ease;
    width:75px;
}

#content-div.in{
    -webkit-transition: width 300ms ease;
    -moz-transition: width 300ms ease;
    -o-transition: width 300ms ease;
    transition: width 300ms ease;
    margin-left: 70px;
}
.sidebar-toggle{
    width:100%;
    float:left;}
@media only screen and (max-width: 900px) {

    #sidebar{
        -webkit-transition: width 300ms ease;
        -moz-transition: width 300ms ease;
        -o-transition: width 300ms ease;
        transition: width 300ms ease;
        width:75px;
    }

    #content-div{
        -webkit-transition: width 300ms ease;
        -moz-transition: width 300ms ease;
        -o-transition: width 300ms ease;
        transition: width 300ms ease;
      margin-left: 70px;

    }



}
@media only screen and (max-width: 600px) {

#sidebar{
    display: none;

}
  .sidebar-toggle-button{display: none;}
  .sidebar-toggle-button-mobile{display:block;}

  #content-div{
        margin-left: 0px;
        padding: 0;
    }
  #content-div.in{

    margin-left:0px;
  }
}

</style>
