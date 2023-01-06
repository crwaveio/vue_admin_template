<template>
  <v-form
      ref="form"
      v-model="valid"
  >


    <v-text-field
        v-model="name"
        :rules="nameRules"
        label="Username"
        outlined
        required
    ></v-text-field>
    <v-text-field
        v-model="password"
        :rules="[passwordRules.required]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        outlined
        label="Password"
        @click:append="show1 = !show1"
    ></v-text-field>

    <v-btn
        :disabled="!valid"

        color="success"
        block
        @click="validate"
    >
      Sign In
    </v-btn>
    <div class="v-text-field__details pt-4 pr-2"><div class="v-messages theme--light error--text" role="alert"><div class="v-messages__wrapper"><div class="v-messages__message">{{ formmessage }}</div></div></div></div>    <div class="float-right mt-5 text-primary heading">Forgot your password?</div><br>


  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginForm",
  data: () => ({
    valid: true,
    name:'kminchelle',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    password: '0lelplR',
    passwordRules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    formmessage:''
  }),
  methods: {
    validate () {
      let credentials = {
        username: this.name,
        password: this.password,
      };
      const config = {
        headers:{
          'Content-Type': 'application/json'

        }
      };
      var url='https://dummyjson.com/auth/login';
      axios
          .post(url, JSON.stringify(credentials)
              ,config)
          .then((res) => {
            if(res.status==200){


              this.$store.commit('user/auth_user',credentials);
              this.$router.push('/');

            }
          })
          .catch( error => {
            if(error){
              this.formmessage='Wrong username or password'

            }

              }

          );
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

</style>