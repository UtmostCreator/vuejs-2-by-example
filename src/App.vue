<template>
    <div>
        <app-header></app-header>
        <hr>
        <button @click="activeComponent = 'appBlue'">Activate appBlue component</button>
        <button @click="activeComponent = 'appGreen'">Activate appGreen component</button>
        <button @click="activeComponent = 'appRed'">Activate appRed component</button>

        <keep-alive>
            <component :is="activeComponent"><p>{{ activeComponent }} component is shown</p></component>
        </keep-alive>
        <!--        <app-blue><p>Content blue</p></app-blue>-->
        <!--        <app-green><p>Content green</p></app-green>-->
        <!--        <app-red><p>Content red</p></app-red>-->
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Blue from './components/Blue';
import Green from './components/Green';
import Red from './components/Red';

export default {
    data: function () {
        return {
            activeComponent: 'appGreen',
        }
    },
    components: {
        'app-header': Header,
        'app-footer': Footer,
        appBlue: Blue,
        appGreen: Green,
        appRed: Red,
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
