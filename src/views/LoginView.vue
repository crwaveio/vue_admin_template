<template>
  <div class="container login-container">
    <div style="width: 100vh;">
      <div class="row main-container">
        <div class="col-lg-6 col-md-12">
          <div class="brand-container">
          <div class="logo">
            <img  class="rounded  d-block" width="200px"  src="/logo.png">
          </div>
          <div>
            <h2 class="brand-text">
            This page is not ready yet<br/>

             </h2>
          </div>
        </div>
        </div>
        <div class="col-lg-6 col-md-12">


    <v-card class="form-container" style="">




      <v-form
          ref="form"
          v-model="valid"
      >
        <v-text-field
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            outlined
            required
        ></v-text-field>

        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            outlined
            required
        ></v-text-field>

        <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
        >
          Submit
        </v-btn>


      </v-form>
    </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"LoginView",
  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}

</script>

<style scoped>
.login-container{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
}
.logo{
  padding:10px;
}
.brand-text{
  font-family: "SFProDisplay-Regular, Helvetica, Arial, sans-serif";
  font-size: 24px;
  font-weight: normal;
  margin-left:10px;
}
.brand-container{
  padding-top: 80px;
}
.form-container{
  padding:20px;
  padding-top:100px;
  padding-bottom: 100px;
  margin-bottom: 100px;
}
.main-container{
  border-radius: 20px;
  background-color: white;
}

@media only screen and (max-width: 960px) {
  .login-container {
    justify-content: center;
    align-items: stretch	;
    height: auto;
  }
}
</style>
