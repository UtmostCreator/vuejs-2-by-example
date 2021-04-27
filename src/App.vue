<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-new-result></app-new-result>
                <hr>
                <app-counter></app-counter>
                <app-new-counter></app-new-counter>
                <hr>
                <input type="text" v-model="value">
                <p>{{ value }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import NewCounter from './components/NewCounter.vue';
    import Result from './components/Result.vue';
    import NewResult from './components/NewResult.vue';
    import * as types from './store/types';

    export default {
        computed: {
          value: {
              get() {
                  return this.$store.getters[types.VALUE];
              },
              set(value) {
                  this.$store.dispatch(types.UPDATE_VALUE, value);
              }
          }
        },
        methods: {
          updateValue(event) {
              this.$store.dispatch(types.UPDATE_VALUE, event.target.value);
          }
        },
        components: {
            appCounter: Counter,
            appNewCounter: NewCounter,
            appResult: Result,
            appNewResult: NewResult,
        }
    }
</script>

