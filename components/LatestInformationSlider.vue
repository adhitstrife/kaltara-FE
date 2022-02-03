<template>
  <div class="latest-information-slider px-2 relative">
    <VueSlickCarousel
      v-if="length"
      ref="carousel"
      v-bind="settings"
      class="absolute z-0"
    >
      <div
        v-for="information in informations"
        :key="information.id"
        class="p-2"
      >
        <information-card :title="information.name" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import InformationCard from './InformationCard.vue'
export default {
  components: { VueSlickCarousel, InformationCard },
  props: {
    informations: {
      type: Array,
      default: null,
    },
    length: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 5,
        arrows: false,
        responsive: [
          {
            breakpoint: 640,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1280,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
            },
          },
        ],
      },
    }
  },
}
</script>

<style></style>
