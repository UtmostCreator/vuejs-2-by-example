<template>
    <div>
        <p>Counter result is {{ doubleCounter }}</p>
        <p>{{ stringCounter }}</p>
        <p>{{ ourOwnGetterWithinAComponent }}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    // we NEED to add in package.json (babel-preset-stage-3) or run 'npm i -D babel-preset-stage-3' it adds a support for spread operator
    // + .babelrc presets.
    computed: {
        // mapGetters is an object which holds all the mapped methods (computed properties);
        // spread operator pull them all out of there, and create separate key values pairs for each of them
        // this way it allows us to add our custom getters to already existing methods which are get created automatically into this object (computed)
        ...mapGetters([
            'doubleCounter',
            'stringCounter',
        ]),
        ourOwnGetterWithinAComponent() {
            return 'ourOwnGetterWithinAComponent';
        }
    }
}
</script>

<style scoped></style>
