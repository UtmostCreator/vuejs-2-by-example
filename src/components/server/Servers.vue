<template>
    <ul class="server-details" style="display:flex; flex-flow:column; background: #2c3e50; color:white;">
        <app-server
            v-for="server in items"
            :server="server"
        >
        </app-server>
    </ul>
</template>

<script>
import Server from './Server';

export default {
    name: "Servers",
    data: function() {
        return {
            items: [
                {id: 999, name: 'Server 4', description: 'SOme random text of 999'},
                {id: 123, name: 'Server 5', description: 'SOme random text of 123'},
                {id: 9908, name: 'Server 55', description: 'SOme random text of 9908'},
                {id: 3321, name: 'Server 1', description: 'SOme random text of 3321'},
                {id: 1241, name: 'Server 66', description: 'SOme random text of 1241'},
            ]
        }
    },
    components: {
        appServer: Server
    }
}
</script>

<style scoped>

</style>
