<template>
    <div>
        <app-header></app-header>
        <hr>
        <h1>Vuex</h1>
        <app-result></app-result>
        <app-another-result></app-another-result>
        <hr style="font-size: 2rem">
        <app-counter></app-counter>
        Another C:
        <app-another-counter></app-another-counter>
        <hr>
        <app-footer></app-footer>

        <div>
            <p> Value: {{ value }}</p>
            <input type="text" v-model="value">

        </div>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Result from './components/Result';
import AnotherResult from './components/AnotherResult';
import Counter from './components/Counter';
import AnotherCounter from './components/AnotherCounter';

export default {
    computed: {
        value: {
            get() {
                return this.$store.getters.value;
            },
            set(value) {
                this.$store.dispatch('asyncUpdateValue', value);
            }
        }
    },
    methods: {
      updateValue(event) {
          this.$store.dispatch('asyncUpdateValue', +event.target.value);
      }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-result': Result,
        'app-another-result': AnotherResult,
        'app-counter': Counter,
        'app-another-counter': AnotherCounter,
    }
}
</script>


<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
