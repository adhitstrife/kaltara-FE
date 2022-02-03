<template>
  <div class="district-list p-4 sm:p-8 md:p-16">
    <title-section :title1="'Daftar Kabupaten di Kalimantan Utara'" />
    <div v-if="listDistrict.results && listDistrict.results.length > 1" class="">
      <district-slider class="xl:pl-32" :districts="listDistrict.results" :length="listDistrict.results.length"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import TitleSection from './TitleSection.vue'
export default {
  components: { TitleSection },
  data() {
    return {
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
