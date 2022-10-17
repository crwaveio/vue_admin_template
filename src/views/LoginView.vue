<template>
 <page-container>


  <div class="container login-container">
<div class="col-lg-5 col-md-9">
  <v-card-title class="text-center justify-center py-6">
    <img :src="`${publicPath}assets/images/logo.png`">
  </v-card-title>
  <v-card color="basil">

    <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
    >      <v-tab v-for="item in items" :key="item.tab">
        {{ item.tab }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab"  style="padding: 20px;">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-card flat>
          <v-card-text>
            <component v-bind:is="item.content"></component>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </div>
  </div>
 </page-container>
</template>

<script>
import PageContainer from "@/components/PageContainer";
import LoginForm from "@/components/Forms/LoginForm";
import RegisterForm from "@/components/Forms/RegisterForm";
export default {
  name:"LoginView",
  metaInfo: {
    title: 'Login',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
  },
  components: {RegisterForm, LoginForm, PageContainer},
  data: () => ({
    publicPath: process.env.BASE_URL,

    tab: 1,

    items: [
      { tab: 'Sign Up', content: 'RegisterForm' },
      { tab: 'Sign In', content: 'LoginForm' }
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    valid: true,
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: 'admin@email.com',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: 'Password',
    passwordRules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
    },
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
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto&display=swap');
.login-container{

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

}

.brand-text{
  line-height: 50px;

  margin-left:30px;
}
.brand-container{
  display: flex;
  justify-content: center;
  align-items: center;
height: 100%;
}
.form-container{
  margin:20px;
  padding: 20px;
  padding-top:100px;
  padding-bottom: 100px;
}


@media only screen and (max-width: 960px) {
  .login-container {
    justify-content: center;
    align-items: stretch	;
    height: auto;
  }

}
</style>
