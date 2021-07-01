<template>
    <div>
        <h1>Vuex</h1>
        <app-posts></app-posts>
    </div>
</template>

<script>
import Posts from './components/Posts';

export default {
    data() {
        return {
            title: 'test',
        };
    },
    components: {
        'app-posts': Posts,
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
