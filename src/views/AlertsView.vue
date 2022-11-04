<template>
  <div class="text-center">

<div class="row">
  <div class="col mt-2">
    <v-btn
        dark
        color="red"
        @click="snackbar_failure= true"
    >
      Click
    </v-btn>
      </div>
      <div class="col mt-2">

      <v-btn
        dark
        color="success"
        @click="snackbar_success= true"
    >
      Click
    </v-btn>
      </div>
    </div>
    <v-snackbar
        v-model="snackbar_failure"
        :timeout="timeout"
        top
        color="red accent-2"

        right
    >
  This is a failure message

    </v-snackbar>


    <v-snackbar
        v-model="snackbar_success"
        :timeout="timeout"
        top
        color="success"

        right
    >
      This is a success message

    </v-snackbar>
  </div>

</template>

<script>

export default {
    name: "AlertsView",
  data: () => ({
    snackbar_failure: false,
    snackbar_success:false,
    text: 'Lorem ipsum dolor sit amet',
    vertical: true,
    timeout:2000
  }),
}
</script>

<style scoped>

</style>
