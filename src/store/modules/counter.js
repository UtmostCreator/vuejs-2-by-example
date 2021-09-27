import * as types from '../types';

const state = {
    counter: 0,
    timer: null,
};

const getters = {
    [types.G_COUNTER_DOUBLE_VALUE]: state => {
        return state.counter * 2;
    },
    [types.G_COUNTER_CLICK_STR]: state => {
        return state.counter === 0 || Math.abs(state.counter) > 1 ? `${state.counter} clicks` : state.counter + ' click';
    },
};

const mutations = {
    [types.M_COUNTER_INC]: (state) => {
        state.counter++;
    },
    [types.M_COUNTER_INC_WITH_PARAM]: (state, payload) => {
        state.counter += payload;
    },
    [types.M_COUNTER_DEC]: state => {
        state.counter--;
    },
    [types.M_COUNTER_DEC_WITH_PARAM]: state => {
        state.counter--;
    },
};

const actions = {
    // inc: context => {
    //     context.commit('inc');
    // },
    // using destructure
    // inc: ({commit}) => {
    //     commit(types.M_COUNTER_INC);
    // },
    // incWithParam: ({commit}, payload) => {
    //     commit(types.M_COUNTER_INC_WITH_PARAM, payload);
    // },
    // dec: ({commit}) => {
    //     commit(types.M_COUNTER_DEC);
    // },
    // decWithParam: ({commit}, payload) => {
    //     commit(types.M_COUNTER_DEC_WITH_PARAM, payload);
    // },
    [types.A_COUNTER_INC_ASYNC]: ({commit}) => {
        setTimeout(function () {
            commit(types.M_COUNTER_INC);
        }, 1000);
    },
    [types.A_COUNTER_INC_WITH_PARAM_ASYNC]: ({commit, state}, params) => {
        if (state.timer === null) {
            state.timer = setTimeout(function () {
                commit(types.M_COUNTER_INC_WITH_PARAM, params.payload);
                state.timer = null;
            }, params.delay);
        }
    },
    [types.A_COUNTER_DEC_ASYNC]: ({commit}) => {
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
