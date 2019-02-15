const app = {
    state: {
        requestLoading: 0
    },
    mutations: {
        SET_LOADING: (state, status) => {
            if (status === 0) {
                state.requestLoading = 0
                return 
            }
            state.requestLoading = status ? ++state.requestLoading: --state.requestLoading
        }
    },
    actions: {
         SetLoading ({ commit },status) {
            commit('SET_lOAIDING', status)
         }
    }
}
export default app