<template>
    <div>
        {{title}}
    </div>
</template>

<script>
export default {
    name: "Footer",
    data: function() {
        return {
            title: 'Server management goes here',
        }
    }
}
</script>

<style scoped>
    div {
        border: 3px solid yellowgreen;
    }
</style>
