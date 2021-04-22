<template>
    <div>
        <app-header></app-header>
        <hr>
        <button @click="selectedComponent = 'appQuote'">Select Quote 1</button>
        <button @click="selectedComponent = 'appAuthor'">Select Quote 1</button>
        <button @click="selectedComponent = 'appNewQuote'">Select Quote 1</button>
        <h4>{{selectedComponent}}</h4>
        Dynamically loaded component (by its name):
        <div v-if="selectedComponent" style="border: .1rem dotted darkgreen; padding: 1rem">

            <component v-bind:is="selectedComponent">
                Default component content!!!!!
            </component>
        </div>
<!--        <app-quote>-->
<!--            <h2 slot="title">{{ quoteTitle }}</h2>-->
<!--            <p slot="extra-text">EXTRA content from parent</p>-->
<!--            <q>Custom description</q>-->
<!--        </app-quote>-->
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Quote from './components/Quote';
import Author from './components/Author';
import newQuote from './components/newQuote';

export default {
    data: function () {
        return {
            quoteTitle: 'Some Specific Quote from App',
            selectedComponent: 'appQuote',
        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        appQuote: Quote,
        appAuthor: Author,
        appNewQuote: newQuote,
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
