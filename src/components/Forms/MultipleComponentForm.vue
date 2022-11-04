<template>
  <form style="padding:20px;">
    <div class="v_title d-flex form_title">Form Title</div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
        <div class="v_label" >Firstname</div>

        <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="10"
            outlined
            dense
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
        ></v-text-field>
      </div>
      <div class="col-sm-12 col-md-12 col-lg-6 mt-5">
        <div class="v_label" >Surname</div>

        <v-text-field
            v-model="surname"
            :error-messages="surnameErrors"
            :counter="10"
            outlined
            dense
            required
            @input="$v.surname.$touch()"
            @blur="$v.surname.$touch()"
        ></v-text-field>
      </div>
    </div>

    <div class="v_area">


    </div>
    <div class="v_label" >Email</div>

    <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        required
        outlined
        dense
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
    ></v-text-field>
    <div class="v_label" >Item</div>

    <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        outlined
        dense
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
    ></v-select>

    <v-btn
        class="mr-4"
        @click="submit"
    >
      submit
    </v-btn>


  </form>

</template>

<script>
import {validationMixin} from "vuelidate";
import {email, maxLength, required} from "vuelidate/lib/validators";

export default {
  name: "MultipleComponentForm",
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    surname: { required, maxLength: maxLength(10) },

    email: { required, email },
    select: { required },
    checkbox: {
      checked (val) {
        return val
      },
    },
  },

  data: () => ({
    name: '',
    surname:'',
    email: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,

  }),

  computed: {
    checkboxErrors () {
      const errors = []
      if (!this.$v.checkbox.$dirty) return errors
      !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    surnameErrors () {
      const errors = []
      if (!this.$v.surname.$dirty) return errors
      !this.$v.surname.maxLength && errors.push('Last name must be at most 10 characters long')
      !this.$v.surname.required && errors.push('Last name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  },

  methods: {
    submit () {
      this.$v.$touch()
    },

  },
}
</script>

<style scoped>
.v_label{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding-bottom: 10px;
  padding-left: 2px;
}
.form_title{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color:#0275d8;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
  padding-bottom: 10px  ;

}

.v_title{
  margin: 0 auto;
}
</style>