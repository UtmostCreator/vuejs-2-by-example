<template>
    <div class="heading">
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: "Header",
    data: function() {
        return {
            title: 'Server Status',
        }
    }
}
</script>

<style scoped>
div {
    border: 3px solid lightsteelblue;
}

</style>
