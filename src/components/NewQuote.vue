<template>
    <div>

        <div>New Quote</div>
        <button @click="counter++">inc</button>
        {{ counter }}
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            counter: 0,
        };
    }
}
</script>

<style scoped>

</style>
