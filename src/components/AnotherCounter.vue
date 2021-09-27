<template>
    <div>
        <button @click="inc">+1</button>
        <button @click="incWithParam(100)">+100</button>
        <button @click="dec">-1</button>
        <button @click="asyncIncWithParams({payload: 33, delay: 550})">+33; 550ms delay</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
methods: {
    ...mapActions([
        'inc',
        'dec',
        'incWithParam',
        'asyncIncWithParams',
    ]),
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
