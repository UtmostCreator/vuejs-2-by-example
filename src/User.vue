<template>
    <div class="user-comp">
        <h2>It is a user component</h2>

        <button @click="changeName">Change name</button>
        Case sensitive (userName) will work in a single file.
        <p>Name is: {{ name }}</p>
        <!-- v-on:nameWasResetted="name = $event" or @nameWasResetted="name = $event"
               event is a data passed as a 2nd argument in $emit() -->
<!--
update parent property
v-on:update:userName="name = $event" or v-on:userName="name = $event"
or shorthand like: :userName.sync="name"
-->
        <app-user-detail :user-name="name" :userName.sync="name"></app-user-detail>
        <app-user-edit></app-user-edit>
    </div>
</template>

<script>
import UserEdit from './UserEdit'
import UserDetail from './UserDetail'

export default {
    data: function () {
        return {
            name: 'Unknown Name',
        }
    },
    methods: {
        // these are 2 diff methods
        changeName() {
            this.name = 'Known name';
        },
        changename() {
            this.name = 'full lowercase';
        }
    },
    components: {
        'app-user-edit': UserEdit,
        'app-user-detail': UserDetail,
    }
}
</script>

<style scoped>
div.user-comp {
    border: 3px solid hsl(248, 53%, 58%);
}
</style>
