<template>
    <div>
        <p> Counter result is {{ counter }}</p>
        <p>{{clicks}}</p>
    </div>
</template>

<script>

export default {
    computed: {
        counter() {
            return this.$store.getters.doubleCounter;
        },
        clicks() {
            return this.$store.getters.stringCounter;
        }
    }
}
</script>

<style scoped></style>
