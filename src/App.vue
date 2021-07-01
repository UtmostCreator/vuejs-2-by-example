<template>
    <div>
        <h1>Vuex</h1>
        <h2>{{ getValidCount ? getValidCount : 'false'}}</h2>
        <!-- <app-posts></app-posts> -->
        <app-post-form></app-post-form>
        <div class="post" v-for="post in getValidPosts" :key="post.id">
            <h3>{{ post.title }}</h3>
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostForm from './components/PostForm.vue';
// components must only display data - no data (from server) changes should be done here
import Posts from "./components/Posts";

export default {
    // getting the data from vuex
    // computed: {
    //     allPosts() {
    //         return this.$store.getters.allPosts;
    //     },
    // },
    // another way to get the data from the vuex
    computed: {
        ...mapGetters(['allPosts', 'postsCount', 'getValidPosts', 'getValidCount']),
    },
    async mounted() {
        // better to use vuex modules folder to fetch the data.
        // this.$store.dispatch('fetchPosts'); // no the best varian. down below a better one
        this.fetchPosts(4);

    },
    methods: mapActions(['fetchPosts']),
    components: {
        "app-posts": Posts,
        "app-post-form": PostForm,
    },
};
</script>


<style lang="scss">

    .post {
        border: 3px solid steelblue;
    }
    div.post:not(:last-child) {
        margin-bottom: 2px;
    }

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
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
