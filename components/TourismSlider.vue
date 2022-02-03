<template>
  <vue-card-stack :cards="cards" :stack-width="'100%'" :card-width="380">
    <template v-slot:nav="{ onNext }">
      <nav
        class="
          nav
          h-10
          w-10
          rounded-full
          bg-white
          flex
          justify-between
          absolute
          top-44
          right-0
          z-10
        "
      >
        <button class="w-full flex justify-center items-center" @click="onNext">
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
      </nav>
    </template>
    <template v-slot:card="{ card }">
      <div class="frame bg-white rounded-xl w-full md:h-auto p-2 z-0">
        <div
          class="w-full h-80 md:h-80 rounded-xl"
          :style="{
            background: 'url(' + card.image + ') no-repeat center center',
            backgroundSize: 'cover',
          }"
        >
        </div>
      </div>
    </template>
  </vue-card-stack>
</template>

<script>
import VueCardStack from 'vue-card-stack'
export default {
  components: {
    VueCardStack,
  },
  data() {
    return {
      cards: [
        { image: require('~/assets/images/malinau.jpg') },
        { image: require('~/assets/images/malinau.jpg') },
        { image: require('~/assets/images/malinau.jpg') },
        { image: require('~/assets/images/malinau.jpg') },
        { image: require('~/assets/images/malinau.jpg') },
      ],
    }
  },
}
</script>

<style></style>
