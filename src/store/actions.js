import * as types from './types';

export default {
    [types.A_VALUE_UPDATE_ASYNC]: ({commit, state}, payload) => {
        state.timer = setTimeout(function () {
            commit(types.M_VALUE_UPDATE, payload);
            state.timer = null;
        }, 250);
    }
};


