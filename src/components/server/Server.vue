<template>
    <li
        class="server"
        style="cursor:pointer;"
        @click="serverSelected"
    >
        ID: {{ server.id }} | Name: {{ server.name }}
    </li>
</template>

<script>
import {serverBus} from '../../main'

export default {
    name: "Servers",
    props: ['server'],
    methods: {
        serverSelected() {
            serverBus.$emit('serverSelected', this.server);
        }
    }
}
</script>

<style scoped>

</style>
