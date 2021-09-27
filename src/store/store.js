import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // state name is not arbitrary
        counter: 0,
        value: 0,
        timer: null
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter === 0 || Math.abs(state.counter) > 1 ? `${state.counter} clicks` : state.counter + ' click';
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        inc: (state) => {
            state.counter++;
        },
        incWithParam: (state, payload) => {
            state.counter += payload;
        },
        dec: state => {
            state.counter--;
        },
        decWithParam: state => {
            state.counter--;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // actions only for asynchronous tasks
    actions: {
        // inc: context => {
        //     context.commit('inc');
        // },
        // using destructure
        inc: ({commit}) => {
            commit('inc');
        },
        incWithParam: ({commit}, payload) => {
            commit('incWithParam', payload);
        },
        dec: ({commit}) => {
            commit('dec');
        },
        decWithParam: ({commit}, payload) => {
            commit('decWithParam', payload);
        },
        asyncInc: ({commit}) => {
            setTimeout(function () {
                commit('inc');
            }, 1000);
        },
        asyncIncWithParams: ({commit, state}, params) => {
            if (state.timer === null) {
                state.timer = setTimeout(function () {
                    commit('incWithParam', params.payload);
                    state.timer = null;
                }, params.delay);
            }
        },
        asyncDec: ({commit}) => {
            setTimeout(function () {
                commit('dec');
            }, 1000);
        },
        asyncUpdateValue({commit, state},payload) {
            state.timer = setTimeout(function () {
                commit('updateValue', payload);
                state.timer = null;
            }, 100);
        }
    }
});
