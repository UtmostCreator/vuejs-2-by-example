<template>
    <div>
        <button @click="inc">+1</button>
        <button @click="dec">-1</button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    // mapMutations([]); // and just specify the names form the store
    // or  mapMutations({}) or name mutations as you wish.
    methods: mapMutations([
        'dec',
        'inc'
    ])
}
</script>

<style scoped>
</style>
