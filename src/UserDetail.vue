<template>
    <div>
        <h3> User detail component</h3>
        <div>
            <p>Name: {{ userName }}</p>
            <p>Reversed Name: {{ getReversedName() }}</p>
            <p>User Age: {{ userAge }}</p>
        </div>
        <button @click="resetName">Reset name</button>
        <button @click="resetFn">Reset using parent function</button>
    </div>
</template>

<script>
//Note that props are validated before a component instance is created,
// so instance properties (e.g. data, computed, etc) will not be available inside default or validator functions.
export default {
    // Note that objects and arrays in JavaScript are passed by reference, so if the prop is an array or object,
    // mutating the object or array itself inside the child component will affect parent state.
    // in each string it should be a property settable from outside
    props: {
        userName: {
            type: String,
            // required: true, // either required or default
            // default: function () {
            //     return {name: 'Name TEST'}
            // }
            // default: 'TestString', // works if you remove // :user-name="name" from User.vue
        },
        resetFn: Function,
        userAge: Number,
    }, // properties set from outside (e.g parent)
    methods: {
        getReversedName() {
            return this.userName.split('').reverse().join('');
        },
        // trying to change parent vales
        resetName() {
            // reference types (Array, Function, Object) - can be changed this way;
            // but primitive (number, String, boolean, null, undefined, symbol)
            this.userName = 'resetted Name';
            // emit custom event;
            // each vue instance you got access to $emit() method which vuejs gives us
            // components are only extends a vue instance, the are kind of instance of vue.

            // this.$emit('eventName');
            this.$emit('update:userName', this.userName);
        }
    }
}
</script>

<style scoped>
div {
    background: lightblue;
}
</style>
