<template>
    <div>
        <h3> User detail component</h3>
        <div>
            <p>Name: {{ userName }}</p>
        </div>

    </div>
</template>

<script>
export default {
    // in each string it should be a property settable from outside
    props: ['userName'] // properties set from outside (e.g parent)
}
</script>

<style scoped>
div {
    background: lightblue;
}
</style>
