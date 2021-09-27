const asyncUpdateValue = ({commit, state}, payload) => {
    state.timer = setTimeout(function () {
        commit('updateValue', payload);
        state.timer = null;
    }, 250);
};


