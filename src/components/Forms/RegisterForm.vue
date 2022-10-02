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
      Sign Up
    </v-btn>


  </v-form>
</template>

<script>
export default {
  name: "RegisterForm",
  data: () => ({
    valid: true,
    username:"",
    usernameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: {
      required: value => !!value || 'Required.',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
}
</script>

<style scoped>

</style>