<template>
    <div>
        user edit comp
        <p>{{userAge}}</p>
        <button @click="editAge">edit age</button>
    </div>
</template>

<script>
export default {
    name: "UserEdit",
    props: ['userAge'],
    methods: {
        editAge() {
            this.userAge = 30;
            this.$emit('ageWasEdited', this.userAge);
        }
    }
}
</script>

<style scoped>

div {
    background: lightseagreen;
}
</style>
