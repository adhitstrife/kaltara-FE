<template>
  <div class="latest-information px-4 sm:px-8 md:px-16 2xl:px-60 pb-32">
    <div class="head xl:flex pt-10 md:pt-20 md:pb-14 pb-6">
      <p class="text-xl md:text-3xl md:leading-relaxed font-bold">
        {{ title1 }}
      </p>
    </div>
    <div class="content">
      <latest-information-slider :informations="listCategory" :length="listCategory.length" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import LatestInformationSlider from './LatestInformationSlider.vue'
export default {
  components: { LatestInformationSlider },
  data() {
    return {
      title1: 'Layanan Informasi Terkini',
    }
  },
  computed: {
    ...mapGetters({
      listCategory: 'category/getCategory',
    }),
  },
  async mounted() {
    await this.getCategory()
  },
  methods: {
    ...mapActions({
      getCategory: 'category/getCategoryList',
    }),
  },
}
</script>

<style></style>
