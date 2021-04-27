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
        this.$emit('update', 1);
    },
    dec() {
        this.$emit('update', -1);
    }
}}
</script>

<style scoped>
</style>
