<template>
    <div>
        <q><slot></slot></q>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    div {
        border: 1px solid #cccccc;
        box-shadow: 1px 2px 2px 3px black;
        margin: auto;
        text-align: center;
    }

    h2 {
        color: green;
    }
</style>
