<template>
    <div>
        <button @click="inc">+1</button>
        <button @click="incWithParam(100)">+100</button>
        <button @click="dec">-1</button>
        <button @click="asyncIncWithParams({payload: 33, delay: 550})">+33; 550ms delay</button>
        <button @click="asyncIncWithParams({payload: -33, delay: 550})">-33; 550ms delay</button>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex';
import * as types from "../store/types";

export default {
methods: {
    ...mapMutations({
        inc: types.M_COUNTER_INC,
        dec: types.M_COUNTER_DEC,
        incWithParam: types.M_COUNTER_INC_WITH_PARAM,
    }),
    ...mapActions({
        asyncIncWithParams: types.A_COUNTER_INC_WITH_PARAM_ASYNC,
        asyncDecWithParams: types.A_COUNTER_DEC_WITH_PARAM_ASYNC,
    }),
    // mapActions does the following:
    // inc() {
    //     this.$store.dispatch('inc');
    //     this.$store.dispatch('inc', byValue); byValue is a param
    // }


    // inc() {
    //     this.$store.commit('inc');
    // },
    // dec() {
    //     this.$store.commit('dec');
    // }
}}
</script>

<style scoped>
</style>
