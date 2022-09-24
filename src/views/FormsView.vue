<template>
<base-page>
    <v-app>

    <div class="col-sm-12 col-md-6">
<v-card>
        <form style="padding:20px;">
            <div class="v_title d-flex justify-content-center"><h3>Sign Up</h3></div>
            <div class="v_area">

            <div class="v_label" >Firstname</div>
            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                solo
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
            ></v-text-field>
            </div>
            <div class="v_area">

            <div class="v_label" >Firstname</div>

            <v-text-field
                v-model="name"
                :error-messages="nameErrors"
                :counter="10"
                label="Name"
                solo
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
            ></v-text-field>
            </div>

            <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @input="$v.email.$touch()"
                @blur="$v.email.$touch()"
            ></v-text-field>
            <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                label="Item"
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
            ></v-select>
            <v-select
                v-model="select"
                :items="items"
                :error-messages="selectErrors"
                outlined
                required
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
            ></v-select>


            <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
            <v-checkbox
                v-model="checkbox"
                :error-messages="checkboxErrors"
                label="Do you agree?"
                required
                @change="$v.checkbox.$touch()"
                @blur="$v.checkbox.$touch()"
            ></v-checkbox>www
            <v-btn
                class="mr-4"
                @click="submit"
            >
                submit
            </v-btn>
            <v-btn @click="clear">
                clear
            </v-btn>

        </form>
</v-card>

    </div>
    </v-app></base-page>

</template>

<script>
import BasePage from "../components/BasePage";
import {validationMixin} from "vuelidate";
import { required, maxLength, email } from 'vuelidate/lib/validators'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
export default {
    name: "Forms",
    components: {BasePage,    vueDropzone: vue2Dropzone},
    mixins: [validationMixin],

    validations: {
        name: { required, maxLength: maxLength(10) },
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
        email: '',
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
        checkbox: false,
        dropzoneOptions: {
            url: 'https://httpbin.org/post',
            thumbnailWidth: 150,
            maxFilesize: 0.5,
            headers: { "My-Awesome-Header": "header value" }
        }
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
        clear () {
            this.$v.$reset()
            this.name = ''
            this.email = ''
            this.select = null
            this.checkbox = false
        },
    },
}
</script>

<style scoped>
.v_label{
    font-size: 16px;
    padding-bottom:10px;
}
.text-field{
    color: #90C143 !important; /* this will override the existing property applied */
    /* add whatever properties you want */
}
.v_title{
margin: 0 auto;
}
.v-text-field-details{
    margin-bottom: 0px;
}
</style>
