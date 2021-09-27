import * as types from './types';

export default {
    [types.M_VALUE_UPDATE]: (state, payload) => {
        state.value = payload;
    }
}
