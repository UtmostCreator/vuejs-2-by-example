<template>
    <div>
        <app-header></app-header>
        <hr>
        <app-quote>
            <h2 slot="title">{{ quoteTitle }}</h2>
            <q slot="content">Custom description</q>
        </app-quote>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Quote from './components/Quote';

export default {
    data: function () {
        return {
            quoteTitle: 'Some Specific Quote from App'
        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        'app-quote': Quote
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
