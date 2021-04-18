<template>
    <div>
        user edit comp
        <p>{{ userAge }}</p>
        <button @click="editAge">edit age using Event bus</button>
        <button @click="editAgeParentFn">edit age from parent function</button>
    </div>
</template>

<script>
import {eventBus} from './main';

export default {
    name: "UserEdit",
    props: {
        'userAge': Number,
        'editAgeParentFn': Function,
    },
    methods: {
        editAge() {
            this.userAge = 30;
            // this.$emit('ageWasEdited', this.userAge);
            // eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}
</script>

<style scoped>

div {
    background: lightseagreen;
}
</style>
