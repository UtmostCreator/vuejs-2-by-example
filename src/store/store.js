import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // state name is not arbitrary
        counter: 0,
        value: 0,
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + " Clicks";
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        // with one param
        // inc: (state, payload) => {
        inc: (state, by) => {
            state.counter += by;
        },
        dec: (state, by) => {
            state.counter -= by;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // ONLY ACTIONS for asynchronous tasks
    actions: {
        // the inc method with a param see NewCounter.vue LINE 20
        inc: (context, payload) => {
        // inc: context => {
            context.commit('inc', payload)
        },
        // destruct the context object to commit object only
        dec: ({commit}, payload) => {
            commit('dec', payload);
        },
        asynchronousInc: ({commit}, payload) => {
            setTimeout(() => {
                // this will call the mutations inc method
                commit('inc', payload.by);
            }, payload.duration);
        },
        // destruct the context object to commit object only
        asynchronousDec: ({commit}, payload) => {
            setTimeout(() => {
                commit('dec', payload.by);
            }, payload.duration);

        },
        updateValue({commit}, payload) {
            commit('updateValue', payload);
        }
    }
});
