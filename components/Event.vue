<template>
  <div class="px-4 sm:px-8 md:px-16 2xl:px-60 pb-32">
    <div class="head-section md:flex md:justify-between">
      <title-section :title1="title1" :title2="title2" />
      <div class="button-event mt-5 mb-16 flex items-end">
        <a
          href=""
          class="px-6 py-3 border-2 rounded-md text-blue-400 border-blue-400"
          >Lihat Semua Event</a
        >
      </div>
    </div>
    <div v-if="listEvent.results && listEvent.results.length > 1" class="">
      <slider class="" :events="listEvent.results" :length="listEvent.results.length"/>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
import Slider from './Slider.vue'
import TitleSection from './TitleSection.vue'
export default {
  components: { TitleSection, Slider},
  data() {
    return {
      title1: 'Nikmati Event dan Destinasi',
      title2: 'populer di Kalimantan Utara',
      events: [
        {
          id: 0,
          title: 'Gunung Harun, Nunukan',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Gunung',
        },
        {
          id: 1,
          title: 'Pantai Encing',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Pantai',
        },
        {
          id: 2,
          title: 'Madu Alam Sembakung',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Kuliner',
        },
        {
          id: 3,
          title: 'Tarian Tradisional Suku Dayak Tidung',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Budaya',
        },
        {
          id: 4,
          title: 'Gunung Kembar, Nunukan',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Gunung',
        },
        {
          id: 5,
          title: 'Tarian break dance',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
          rating: 4,
          review: 120,
          category: 'Budaya',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      listEvent: 'event/getEvent'
    })
  },
  async mounted() {
    await this.getEvent()
  },
  methods: {
    ...mapActions({
      getEvent: 'event/getEventList'
    })
  }
}
</script>

<style></style>
