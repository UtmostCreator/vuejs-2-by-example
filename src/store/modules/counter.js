/*
export const store = new Vuex.Store({
    state: { // state name is not arbitrary
        counter: 0,
        value: 0,
    }
    // ....
*/
// THIS file must contain the same value for counter as in store.js

const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => {
        return state.counter * 2;
    },
    stringCounter: state => {
        return state.counter + " Clicks";
    },
};

const mutations = {
    // with one param
    // inc: (state, payload) => {
    inc: (state, by) => {
        state.counter += by;
    },
    dec: (state, by) => {
        state.counter -= by;
    },
};

const actions = {
    // the inc method with a param see NewCounter.vue LINE 20
    inc: (context, payload) => {
        // inc: context => {
        context.commit('inc', payload)
    },
    // destruct the context object to commit object only
    dec: ({ commit }, payload) => {
        commit('dec', payload);
    },
    asynchronousInc: ({ commit }, payload) => {
        setTimeout(() => {
            // this will call the mutations inc method
            commit('inc', payload.by);
        }, payload.duration);
    },
    // destruct the context object to commit object only
    asynchronousDec: ({ commit }, payload) => {
        setTimeout(() => {
            commit('dec', payload.by);
        }, payload.duration);

    },
};

export default {
    // key: value
    // state: state, // ...
    state,
    mutations,
    actions,
    getters
}
