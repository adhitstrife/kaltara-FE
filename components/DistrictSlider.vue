<template>
  <div>
    <div class="slider px-2">
      <VueSlickCarousel v-if="length" v-bind="settings" ref="carousel" class="">
        <div
          v-for="district in districts"
          :key="district.id"
          class="xl:py-2 px-4"
          @click="moveToDistrictDetail(district.id)"
        >
          <district-card
            :district="district.name"
            :image="district.gallery"
            class="cursor-pointer"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import DistrictCard from './DistrictCard.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel, DistrictCard },
  props: {
    districts :  {
        type: Array,
        default: null
      }, 
    length : {
      type: Number,
      default: 0
    }
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
            }
          },
          {
            breakpoint: 768,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1024,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 1280,
            settings: {
              focusOnSelect: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
            }
          }
        ]
      },
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev()
    },
    next() {
      this.$refs.carousel.next()
    },
    moveToDistrictDetail(id) {
      localStorage.setItem('id', id)
      this.$router.push({path: '/detail/wisata', query: { districtId: id}})
    },
  }
}
</script>
