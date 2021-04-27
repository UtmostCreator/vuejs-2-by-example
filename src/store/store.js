import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // state name is not arbitrary
        value: 0,
    },
    getters: {
        value: state => {
            return state.value;
        }
    },
    mutations: {
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // ONLY ACTIONS for asynchronous tasks
    actions: {
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        }
    },
    // here you MUST specify your modules which you want to merge with this configuration
    modules: {
        // we can specify just counter as they are the same (ES6 handles it)
        // counter: counter, // key: value
        counter,
    }
});
