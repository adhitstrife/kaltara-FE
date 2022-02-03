import { EVENT_LIST } from "~/static/static_string_endpoints"

export const state = () => ({
    list: []
})

export const actions = {
    getEventList({commit}) {
        this.$axios.get(EVENT_LIST).then((response) => {
            commit('SET_EVENT', response.data)
        })
    }
}

export const getters = {
    getEvent: (state) => state.list
}

export const mutations = {
    SET_EVENT(state, listEvent) {
        state.list = listEvent
    }
}