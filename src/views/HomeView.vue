<template>
    <div class="home">
        <img class="logo" width="100" src="logo.png" alt="">
        <h1>
            {{ count }}
        </h1>
        <button class="btn" @click="$store.commit('INCREMENT')">INCREMENT</button>


        <base-page> <div class="row">

            <div class="col-1" style="background: #fc9;">Left column</div>
            <div class="col-2" style="background: #eee;"><div class="row"><div class="col-6" style="background-color: red;">sakdas</div> </div> </div>
            <div class="col-3" style="background: #fc9;">Right column</div>
        </div></base-page>




    </div>
</template>

<script>
import { mapState } from 'vuex';

import BasePage from "../components/BasePage";

export default {
    name: 'home',
    components: {
        BasePage
    },
    data: () => ({
        items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    }),
    computed: {
        ...mapState({
            count: state => state.count
        }),
    }
}
</script>
