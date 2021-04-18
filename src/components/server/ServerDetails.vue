<template>
    <div>
        <h2>{{id}}</h2>
        <h4>{{name}}</h4>
        <p>{{description}}</p>
    </div>
</template>

<script>
export default {
    name: "ServerDetails",
    data: function() {
        return {
            id: '',
            name: '',
            description: '',
        }
    },
    methods: {
        getInfo: function (server) {
            this.id = server.id;
            this.name = server.name;
            this.description = server.description;
        }
    }}
</script>

<style scoped>

</style>
