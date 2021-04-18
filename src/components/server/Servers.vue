<template>
    <ul class="server-details" style="display:flex; flex-flow:column; background: #2c3e50; color:white;">
        <li v-for="item in items">
            ID: {{ item.id }} | Name: {{ item.name }}
        </li>
    </ul>
</template>

<script>
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
    }
}
</script>

<style scoped>

</style>
