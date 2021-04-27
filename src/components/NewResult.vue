<template>
    <div>
        Counter result is {{counter}}
    </div>
</template>

<script>
export default {
    computed: {
        counter() {
            return this.$store.state.counter * 2;
        }
    }
}
</script>

<style scoped></style>
