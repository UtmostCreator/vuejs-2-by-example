<template>
    <div>
        <app-header></app-header>
        <hr>
        <h1>Vuex</h1>
        Res:
        <app-result></app-result>
        New Res:
        <app-new-result></app-new-result>
        <hr style="font-size: 2rem">
        <app-counter></app-counter>
        <app-new-counter></app-new-counter>
        <input type="text" :value="value" @input="updateValue">
        <p>{{value}}</p>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Result from './components/Result';
import NewResult from './components/NewResult';
import Counter from './components/Counter';
import NewCounter from './components/NewCounter';

export default {
    computed: {
        value() {
            return this.$store.getters.value;
        }
    },
    methods: {
      updateValue(event) {
          this.$store.dispatch('updateValue', event.target.value)
      }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-result': Result,
        'app-new-result': NewResult,
        'app-counter': Counter,
        'app-new-counter': NewCounter,
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
