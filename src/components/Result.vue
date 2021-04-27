<template>
    <div>
        Counter result is {{counter}}
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.getters.doubleCounter;
        }
    }
}
</script>

<style scoped></style>
