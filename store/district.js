import { DISTRICT_LIST } from "~/static/static_string_endpoints"

export const state = () => ({
    list: []
})

export const actions = {
    getDistrictList({commit}) {
        this.$axios.get(DISTRICT_LIST).then((response) => {
            commit('SET_DISTRICT', response.data)
        })
    }
}

export const getters = {
    getDistrict: (state) => state.list
}

export const mutations = {
    SET_DISTRICT(state, listDistrict) {
        state.list = listDistrict
    }
}