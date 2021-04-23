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
    },
    destroyed() {
        console.log('destroyed');
    },
    activated() {
        console.log('activated');
    },
    deactivated() {
        console.log('deactivated');
    }
}
</script>

<style scoped>

</style>
