<template>
  <v-form
      ref="form"
      v-model="valid"
  >


    <v-text-field
        v-model="username"
        :rules="usernameRules"
        label="Username"
        outlined
        required
    ></v-text-field>
    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
        outlined
        required
    ></v-text-field>
    <v-text-field
        v-model="password"
        :rules="passwordRules"
        name="input-10-1"
        :type="show1 ? 'text' : 'password'"
        outlined
        required
        label="Password"
    ></v-text-field>
    <v-text-field
        v-model="password2"
        :rules="password2Rules"
        name="input-10-1"
        :type="show1 ? 'text' : 'password'"
        outlined
        required
        label="Confirm Password"
    ></v-text-field>
    <v-btn
        :disabled="!valid"

        color="success"
        block
        @click="validate"
    >
      Sign Up
    </v-btn>
    <div class="v-text-field__details pt-4 pr-2"><div class="v-messages theme--light error--text" role="alert"><div class="v-messages__wrapper"><div class="v-messages__message">{{ formmessage }}</div></div></div></div>


  </v-form>
</template>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",
  data: () => ({
    valid: true,
    username:"",
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 10) || 'Username must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters',
    ],
    password2: '',
    password2Rules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be more than 6 characters',
    ],
    formmessage:''

  }),
  methods: {
    validate () {
      if(this.password==this.password2) {
        let credentials = {
          username: this.name,
          password: this.password,
        };
        const config = {
          headers: {
            'Content-Type': 'application/json'

          }
        };
        var url = 'https://dummyjson.com/auth/login';
        axios
            .post(url, JSON.stringify(credentials)
                , config)
            .then((res) => {
              if (res.status == 200) {


                this.$store.commit('user/auth_user', credentials);
                this.$router.push('/');

              }
            })
            .catch(error => {
                  if (error) {
                    this.formmessage = 'Wrong username or password'

                  }

                }
            );
      }else{
        this.formmessage = 'Password doesnt match'

      }
    },

  },
}
</script>

<style scoped>

</style>