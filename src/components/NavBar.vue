<template>
    <div>
        <div class="w3-sidebar w3-bar-block w3-border-right" style="display:none" id="mySidebar">
            <button @click="w3_close" class="w3-bar-item w3-large">Close &times;</button>

            <Menu></Menu>
        </div>

        <div class="nav-container mx-auto">

        <!-- Image and text -->
            <b-navbar id="navbar" class="navbar"  variant="light">

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <slot>

                    </slot>

                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ms-auto">
                      <profile></profile>

                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        </div>
</template>

<script>
import Profile from "./Avatar/CustomAvatar";
import Menu from "./MenuComp";
export default {
    name: 'NavBar',
    components: {Profile,Menu},

    methods:{
        w3_open() {
            document.getElementById("mySidebar").style.display = "block";
            document.getElementById("mySidebar").style.width = "200px";
          //  document.getElementById("mobile-menu").style.display = "none";

        },

        w3_close() {
            //
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("mySidebar").style.width = "0px";
       //     document.getElementById("mobile-menu").style.display = "block";

        },
    },
}
</script>
<style>

.mobile-menu-item{
    width: auto;
    float: left;
}
.navbar{
    background-color: #ffffff!important;
  /*  border: black 1px solid;*/
  border-radius: 5px;
  height: 50px;


}
.nav-container{
    width: 99%;
  padding-top: 10px;
}


.logo{
    padding: 5px;
}
.w3-button{border:none;display:inline-block;padding:8px 16px;vertical-align:middle;overflow:hidden;text-decoration:none;color:inherit;background-color:inherit;text-align:center;cursor:pointer;white-space:nowrap}

.w3-dropdown-hover:hover .w3-dropdown-content{display:block}
.w3-dropdown-hover:first-child,.w3-dropdown-click:hover{background-color:#ccc;color:#000}
.w3-dropdown-hover:hover > .w3-button:first-child,.w3-dropdown-click:hover > .w3-button:first-child{background-color:#ccc;color:#000}

.w3-sidebar{height:100%;width:200px;background-color:#fff;z-index:2;position:fixed!important;overflow:auto;
    -webkit-transition: width 3s ease;
    -moz-transition: width 3s ease;
    -o-transition: width 3s ease;
    transition: width 3s ease;}


#navbar{
  /* border-radius: 10px;*/
}

.mobile-menu{
    z-index:1;
    display: none;
    height: 50px;
    position: fixed;
}
.mobile-logo{
    float:left;
    padding-top: 5px;
}

@media only screen and (max-width: 600px) {

    .mobile-menu{
        display:block;
        background-color: #0dcaf0;
        width:100%;

    }
    .nav-container{
    }

}

</style>
