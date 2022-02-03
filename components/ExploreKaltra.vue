<template>
  <div class="bg-white px-4 sm:px-8 2xl:px-60 md:px-16 pb-32">
    <title-section
      :title1="title1"
      :title2="title2"
      :description="description"
    />
    <div v-if="listDistrict.results && listDistrict.results.length > 1" class="">
      <district-slider class="" :districts="listDistrict.results" :length="listDistrict.results.length"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
// import DistrictSlider from './DistrictSlider.vue';
import TitleSection from './TitleSection.vue'
export default {
  components: { TitleSection },
  data() {
    return {
      title1: 'Jelajahi Kalimantan Utara',
      title2: 'dengan segala keindahannya',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus bibendum accumsan ut vel donec. Tortor duis aliquet nibh id.',
      provinces: [
        {
          id: 0,
          name: 'Bulungan',
          image: '/images/bulungan.jpg',
        },
        {
          id: 1,
          name: 'Malinau',
          image: '/images/malinau.jpg',
        },
        {
          id: 2,
          name: 'Nunukan',
          image: '/images/nunukan.jpg',
        },
        {
          id: 3,
          name: 'Tana Tidung',
          image: '/images/tana-tidung.jpg',
        },
        {
          id: 5,
          name: 'Tarakan',
          image: '/images/tarakan.jpg',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      listDistrict: 'district/getDistrict'
    })
  },
  async mounted() {
    await this.getDistrict()
  },
  methods: {
    ...mapActions({
      getDistrict: 'district/getDistrictList'
    })
  }
}
</script>

<style></style>
