<template>
    <div>
<!--        <button @click="inc">+1</button>-->
        <button @click="inc(100)">+100</button>
        <button @click="asynchronousInc({by: 500, duration: 1500})">+500 in 1.5s</button>
        <button @click="asynchronousDec({by: 500, duration: 1500})">-500 in 1.5s</button>
        <button @click="dec(50)">-50</button>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    // mapActions([]); // and just specify the names form the store
    // or  mapActions({}) or name mutations as you wish.
    methods: {
        ...mapActions([
            'dec',
            'inc',
            'asynchronousInc',
            'asynchronousDec',
        ]),
    }
}
</script>

<style scoped>
</style>
