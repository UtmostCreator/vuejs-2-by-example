import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import value from './modules/value';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        // state name is not arbitrary
        value: 0,
    },
    modules: {
        counter,
        // value,
    },
    getters,
    mutations,
    // actions only for asynchronous tasks
    actions,
});
