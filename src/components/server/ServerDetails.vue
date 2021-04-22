<template>
    <div v-if="server">
        <h2>Selected: {{ server.id }}</h2>
        <h4>{{ server.name }}</h4>
        <p>{{ server.description }}</p>
        <button @click="resetStatus">Change status</button>
    </div>
    <div v-else>
        SERVER INFO PLACEHOLDER (click on server to see real info)
    </div>
</template>

<script>
import {serverBus} from '../../main'

export default {
    name: "ServerDetails",
    data: function () {
        return {
            server: null,
        }
    },
    methods: {
        resetStatus() {
            this.server.name += '+1';
        }
    },
    created() {
        serverBus.$on('serverSelected', (obj) => {
            this.server = obj;
        });
    }
}
</script>

<style scoped>
div {
    margin-left: 1rem;
    display: flex;
    justify-content: space-evenly;
    flex-flow: wrap;
    align-items: center;
}
</style>
