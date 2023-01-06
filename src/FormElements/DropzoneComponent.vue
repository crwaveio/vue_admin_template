<template>
<div style="padding: 16px">
  <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
</div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: "DropzoneComponent",
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 50,
        thumbnailHeight: 50,

        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" }
      }
    }
  }
}
</script>

<style scoped>

</style>