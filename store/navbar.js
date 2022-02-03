export const state = () => ({
    active: ''
})

export const getters = {
    getActive: (state) => {
        return state.active
    }
}
  
export const mutations = {
    changeActive(state, text) {
      state.active = text
    }
  }