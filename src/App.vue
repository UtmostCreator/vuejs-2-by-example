<template>
    <div>
        <app-header></app-header>
        <hr>
        <div class="servers" style="display: grid; grid: 1fr / 1fr 1fr">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Servers from './components/server/Servers';
import ServerDetails from './components/server/ServerDetails';
import Footer from './components/shared/Footer';

export default {
    components: {
        'app-header': Header,
        'app-servers': Servers,
        'app-server-details': ServerDetails,
        'app-footer': Footer
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
