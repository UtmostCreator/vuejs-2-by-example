<template>
    <div>
        <button @click="inc">+1</button>
        <button @click="dec">-1</button>
    </div>
</template>

<script>
export default {
methods: {
    inc() {
        this.$store.commit('inc');
    },
    dec() {
        this.$store.commit('dec');
    }
}}
</script>

<style scoped>
</style>
