<template>
<div>
    <panel-card title="DatePicker">
      <div class="row" style="padding:16px;">
        <div class="col-4">
      <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="scale-transition"
          offset-y
          min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
              v-model="date"
              label="Picker in menu"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
            v-model="date"
            no-title
            scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
              text
              color="primary"
              @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
              text
              color="primary"
              @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
        </div>

<div class="col-4">
        <v-dialog
            ref="dialog"
            v-model="modal"
            :return-value.sync="date"
            persistent
            width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Picker in dialog"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              scrollable
          >
            <v-spacer></v-spacer>
            <v-btn
                text
                color="primary"
                @click="modal = false"
            >
              Cancel
            </v-btn>
            <v-btn
                text
                color="primary"
                @click="$refs.dialog.save(date)"
            >
              OK
            </v-btn>
          </v-date-picker>
        </v-dialog>
</div>
        <div class="col-4">
        <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
                v-model="date"
                label="Picker without buttons"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
              v-model="date"
              @input="menu2 = false"
          ></v-date-picker>
        </v-menu>
        </div>
      </div>
      <panel-title title="Daterange Picker"/>

    </panel-card>
  <panel-card title="File Upload">
    <DropzoneComponent></DropzoneComponent>
  </panel-card>

  </div>
</template>

<script>

import PanelCard from "@/components/Card/PanelCard.vue";
import PanelTitle from "@/components/Titles/PanelTitle.vue";
import DropzoneComponent from "@/FormElements/DropzoneComponent.vue";

export default {
  name: "FormElements",
  components: {DropzoneComponent, PanelTitle, PanelCard},
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    getMonthFormat(isoDate) {
      console.log("getMonthFormat: " + isoDate)
      return "AA"
    },
    getHeaderDateFormat(isoDate) {
      console.log("getHeaderDateFormat: " + isoDate)
      return "BB"
    },
    getTitleDateFormat(isoDate) {
      console.log("getTitleDateFormat: " + isoDate)
      return "CC"
    }
  }
}
</script>

<style scoped>

</style>