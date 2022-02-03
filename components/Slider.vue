<template>
  <div>
    <div class="slider relative">
      <VueSlickCarousel ref="carousel" v-bind="settings" v-if="length" class="absolute z-0">
        <div class="p-2" v-for="event in events" :key="event.id">
          <event-card :event="event" />
        </div>
      </VueSlickCarousel>
      <div class="button absolute w-full flex justify-between top-36 z-10">
        <button @click="prev"
          class="
            prev-button
            bg-white
            h-10
            w-10
            rounded-full
            shadow-md
            flex
            justify-center
            items-center
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-center text-blue-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          @click="next"
          class="
            next-button
            bg-white
            h-10
            w-10
            rounded-full
            shadow-md
            flex
            justify-center
            items-center
            text-blue-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'MyComponent',
  components: { VueSlickCarousel },
  props: ['events', 'length'],
  data() {
    return {
      settings: {
        focusOnSelect: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchThreshold: 3,
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
      this.$refs.carousel.prev();
    },
    next() {
      this.$refs.carousel.next();
    }
  }
}
</script>
