<template>
    <div>
        <button @click="inc">+1</button>
        <button @click="dec">-1</button>
    </div>
</template>

<script>
import * as types from '../store/types';
import {mapMutations} from "vuex";
export default {
methods: {
    ...mapMutations(['inc', 'dec']),
}
    // inc() {
    //     this.$store.state.counter++;
    // },
    // dec() {
    //     this.$store.state.counter--;
    // }
}
</script>

<style scoped>
</style>
