import { CATEGORY_LIST } from "~/static/static_string_endpoints"

export const state = () => ({
    list: []
})

export const actions = {
    getCategoryList({commit}) {
        this.$axios.get(CATEGORY_LIST).then((response) => {
            commit('SET_CATEGORY', response.data)
        })
    }
}

export const getters = {
    getCategory: (state) => state.list
}

export const mutations = {
    SET_CATEGORY(state, listCategory) {
        state.list = listCategory
    }
}