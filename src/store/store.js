import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    // ONLY ACTIONS for asynchronous tasks
    actions,
    // here you MUST specify your modules which you want to merge with this configuration
    modules: {
        // we can specify just counter as they are the same (ES6 handles it)
        // counter: counter, // key: value
        counter,
    }
});
