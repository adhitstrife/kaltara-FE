import { GALLERY_LIST } from "~/static/static_string_endpoints"

export const state = () => ({
    list: []
})

export const actions = {
    getGalleryList({commit}) {
        this.$axios.get(GALLERY_LIST).then((response) => {
            commit('SET_GALLERY', response.data)
        })
    }
}

export const getters = {
    getGallery: (state) => state.list
}

export const mutations = {
    SET_GALLERY(state, listEvent) {
        state.list = listEvent
    }
}