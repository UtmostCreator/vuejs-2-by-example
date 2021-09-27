import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        counter,
    },
    state: { // state name is not arbitrary
        value: 0,
    },
    getters,
    mutations,
    // actions only for asynchronous tasks
    actions,
});
