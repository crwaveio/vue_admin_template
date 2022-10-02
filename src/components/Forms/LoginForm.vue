<template>
  <v-form
      ref="form"
      v-model="valid"
  >


    <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Email"
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
    <div class="float-right mt-5 text-primary heading">Forgot your password?</div><br>


  </v-form>
</template>

<script>
export default {
  name: "LoginForm",
  data: () => ({
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
}
</script>

<style scoped>

</style>