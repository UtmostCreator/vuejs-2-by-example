<template>
    <div>
        Counter result is {{counter}} - <i>obj as it is using counter</i>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
    computed: {
        ...mapGetters({
            counter:  types.COUNTER_DOUBLE_VALUE,
        }),
        test: function () {
            return 'test';
        }
    }
}
</script>

<style scoped></style>
