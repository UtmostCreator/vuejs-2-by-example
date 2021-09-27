import * as types from '../types';

const state = {
    counter: 0,
    timer: null,
};

const getters = {
    [types.COUNTER_DOUBLE_VALUE]: state => {
        return state.counter * 2;
    },
    [types.COUNTER_CLICK_STR]: state => {
        return state.counter === 0 || Math.abs(state.counter) > 1 ? `${state.counter} clicks` : state.counter + ' click';
    },
};

const mutations = {
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
};

const actions = {
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
};

export default {
    state,
    getters,
    mutations,
    actions,
}
