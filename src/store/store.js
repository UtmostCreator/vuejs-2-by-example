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
        },
        stringCounter:state => {
            return state.counter + " Clicks"
        }
    },
    mutations: {
        inc: state => {
            state.counter++;
        },
        dec: state => {
            state.counter--;
        }
    }
});
