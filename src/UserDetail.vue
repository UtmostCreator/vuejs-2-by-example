<template>
    <div>
        <h3> User detail component</h3>
        <div>
            <p>Name: {{ userName }}</p>
            <p>Reversed Name: {{ getReversedName() }}</p>
        </div>

    </div>
</template>

<script>
//Note that props are validated before a component instance is created,
// so instance properties (e.g. data, computed, etc) will not be available inside default or validator functions.
export default {
    // Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object,
    // mutating the object or array itself inside the child component will affect parent state.
    // in each string it should be a property settable from outside
    props: ['userName'], // properties set from outside (e.g parent)
    methods: {
        getReversedName() {
            return this.userName.split('').reverse().join('');
        }
    }
}
</script>

<style scoped>
div {
    background: lightblue;
}
</style>
