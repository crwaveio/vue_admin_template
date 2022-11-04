<template>

<div class="row  px-0">
    <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
    <v-card>
      <SingleComponentForm></SingleComponentForm>
</v-card>
    </div>
  <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
    <v-card>
      <MultipleComponentForm></MultipleComponentForm>
    </v-card>
  </div>
</div>


</template>

<script>

import SingleComponentForm from "@/components/Forms/SingleComponentForm";
import MultipleComponentForm from "@/components/Forms/MultipleComponentForm";

export default {
    name: "FormsView",
  components: {MultipleComponentForm, SingleComponentForm}

}
</script>

<style scoped>


</style>
