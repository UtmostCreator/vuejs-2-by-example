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
        this.$store.state.counter++;
    },
    dec() {
        this.$store.state.counter--;
    }
}}
</script>

<style scoped>
</style>
