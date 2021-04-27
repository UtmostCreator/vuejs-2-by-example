import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // state name is not arbitrary
        counter: 0,
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        }
    }
});
