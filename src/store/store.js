import Vue from 'vue';
import Vuex from 'vuex';
import posts from './modules/posts';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // recieve data from the server use actions
    actions: {
    },
    // to change the state use mutations
    mutations: {
    },
    state: {},
    modules: {
        posts,
    },
});
