<template>
    <div>
        <p> Counter result is {{ doubleCounter }}</p>
        <p>Str counter: {{ stringCounter }}</p>
        <p> {{ test }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters(['doubleCounter', 'stringCounter']),
        test: function () {
            return 'test';
        }
    }
}
</script>

<style scoped></style>
