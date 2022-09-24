<template><div  data-app>
<div>
    <base-page>
      <panel-card>
      <StatCard></StatCard>
      </panel-card>
   <panel-card>
<div>

        <tabs title="Traffic">
            <tab name="New Users" :selected="true">
                <bar-chart  :labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]' :stepsize=40 :data='[12, 190, 3, 5, 2, 3, 20, 3, 5, 6, 2, 10]' :styles="{height: '250px', position: 'relative'}"></bar-chart>
            </tab>
            <tab  name="Visits">
                <bar-chart :labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]' :stepsize=4 :data='[3, 6, 3, 5, 2, 3, 20, 3, 5, 6, 2, 10]' :styles="{height: '250px', position: 'relative'}"></bar-chart>
            </tab>
            <tab  name="Clicks">
              <bar-chart :labels='["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]' :stepsize=40 :data='[12, 190, 3, 5, 2, 3, 20, 3, 5, 6, 2, 10]' :styles="{height: '250px', position: 'relative'}"></bar-chart>
            </tab>

        </tabs>

</div>
   </panel-card>
      <div class="row  card_margin" style="margin-top: 30px; ">
        <div class="col-sm-12 col-md-12 col-lg-8">      <v-card
            elevation="0"
        >


          <v-card-text>
            <div style="font-size: 14px;color:#0dcaf0;">Last Logins</div>
          </v-card-text>
          <v-data-table
              :headers="headers"
              :items="desserts"
              hide-default-footer
              class="elevation-0"
          >

            <!-- eslint-disable-next-line -->
            <template v-slot:item.image="{ item }">
              <v-avatar size="30">
                <v-img :src="item.image"  ></v-img>
              </v-avatar>
            </template>
          </v-data-table>
        </v-card></div>
        <div class="col-sm-12 col-md-12 col-lg-4">
          <v-card style="height: 100%;">
            <v-card-text>
              <div style="font-size: 14px;color:#0dcaf0;">Browser Usage</div>
            </v-card-text>
          <doughnut-chart :labels='["Safari","Chrome","Edge"]' :data='[300, 50, 100]' :colors='["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"]' :styles="{height: '250px', position: 'relative'}"></doughnut-chart>
         </v-card>   </div>


      </div>

    </base-page>
</div>
</div>
</template>

<style>


</style>
<script>
import BasePage from "../components/BasePage";
import BarChart from "../components/Chart/LineChart";
import Tabs from "../components/TabComponent/TabsComp";
import Tab from "../components/TabComponent/TabComp";
import StatCard from "@/components/Card/StatCard";
import DoughnutChart from "@/components/Chart/DoughnutChart";
import PanelCard from "@/components/Card/PanelCard";

export default {

    name: 'AboutView',
    components: {
      PanelCard,
      DoughnutChart,

      StatCard,
        BarChart,
        BasePage,
        Tabs,
        Tab,

    },

    data () {
        return {

            headers: [
              {value: 'image', align: 'start',sortable: false,          width: "1%"},

                {
                    text: 'Username',
                    sortable: false,
                    value: 'name',
                },
                {text: 'Ip address', value: 'ip',sortable: false},
                {text: 'Browser', value: 'browser',sortable: false},
                {text: 'Login time', value: 'logintime',sortable: false},

            ],
            desserts: [
                {
                    name: 'johndoe',
                    ip: '159.124.125.98',
                    browser: 'Firefox',
                    logintime: 24,
                  image:'https://cdn.vuetifyjs.com/images/lists/2.jpg'

                },
                {
                    name: 'xzs',
                    ip: '123.32.12.54',
                    browser: 'Chrome',
                    logintime: 22,
                     image:'https://cdn.vuetifyjs.com/images/lists/2.jpg'

                },
                {
                    name: 'dk',
                    ip: '123.32.12.54',
                    browser: 'Firefox',
                    logintime: 23,
                  image:'https://cdn.vuetifyjs.com/images/lists/2.jpg'

                },
                {
                    name: 'asds',
                  ip: '124.45.21.13',
                    browser:'Safari',
                    logintime: 67,
                  image:'https://cdn.vuetifyjs.com/images/lists/2.jpg'

                },
                {
                    name: 'Gingerbread',
                    ip: '124.45.21.13',
                    browser:'Chrome',
                    logintime: 49,
                  image:'https://cdn.vuetifyjs.com/images/lists/2.jpg'


                },

            ],
        }
    }
}
</script>

