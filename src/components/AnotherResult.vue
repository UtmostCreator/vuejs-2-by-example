<template>
    <div>
        <p> Counter result is {{ doubleCounter }}</p>
        <p>Str counter: {{ stringCounter }}</p>
        <p> {{ test }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
    computed: {
        ...mapGetters({
            doubleCounter:  types.G_COUNTER_DOUBLE_VALUE,
            stringCounter:  types.G_COUNTER_CLICK_STR,
        }),
        test: function () {
            return 'test';
        }
    }
}
</script>

<style scoped></style>
