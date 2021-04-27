<template>
    <div>
        Counter result is {{customNameGetterName}}
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: mapGetters({
        "customNameGetterName": "doubleCounter"
    })
}
</script>

<style scoped></style>
