<template>

    <div class="col-sm-12 col-md-6 col-lg-3  icard"     >





        <v-card
            elevation="14" style="margin-top: 50px; padding:10px;"
        >
            <div class="d-flex justify-content-between px-md-1" style="padding: 5px;">
                <div class="align-self-center">
                    <i class="fas fa-gavel text-danger fa-4x"></i>               </div>

                <div class="text-end align-self-center">

                    <h3>{{val}}</h3>
                    <div class="mb-0">{{title}}
                </div>
            </div>

    </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "ICard",
    props: ['title','val'],
}
</script>

<style scoped>
.icard{
    border-radius: 10px;
}
.i_text_container{
    float: right;
    width: auto;
    vertical-align: middle;
margin-right: 10px;
}
.icon{
float:left;
    padding:10px;
    margin-top: auto;
    vertical-align: middle;


}
.i_title{
    font-size: 16px;
    width: auto;
}
.i_val{
    text-align: center;
    width: 100%;

}

</style>
