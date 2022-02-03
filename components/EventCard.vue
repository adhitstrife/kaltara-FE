<template>
  <div class="event-card bg-transparent h-auto w-full p-2 md:p-5">
    <div
      class="image h-60 md:h-h-60 xl:h-h-60 bg-blue-300 rounded-md flex items-end"
    >
      <div class="text bg-white px-4 py-4 leading-7 w-1/3 lg:w-32 text-center">
        <p
          v-if="event.fk_category.name == budaya"
          class="tracking-wider text-red-400"
        >
          {{ event.fk_category.name }}
        </p>
        <p
          v-if="event.fk_category.name == gunung"
          class="tracking-wider text-green-400"
        >
          {{ event.fk_category.name }}
        </p>
        <p
          v-if="event.fk_category.name == pantai"
          class="tracking-wider text-blue-400"
        >
          {{ event.fk_category.name }}
        </p>
        <p v-else class="tracking-wider text-yellow-400">
          {{ event.fk_category.name }}
        </p>
      </div>
    </div>
    <div class="event-text mt-6">
      <div class="event-title text-xl font-bold">
        {{ event.name }}
      </div>
      <div class="event-description mt-6">
        {{ event.description }}
      </div>
      <div class="event-review mt-4">
        <div  v-if="event.rating == 1" class="one-stars">
          <OneStars />
        </div>
        <div  v-if="event.rating == 2" class="one-stars">
          <TwoStars />
        </div>
        <div  v-if="event.rating == 3" class="one-stars">
          <ThreeStars />
        </div>
        <div  v-if="event.rating == 4" class="one-stars">
          <FourStars />
        </div>
        <div  v-if="event.rating == 5" class="one-stars">
          <FiveStars />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneStars from './stars/OneStars.vue'
import TwoStars from './stars/TwoStars.vue'
import ThreeStars from './stars/ThreeStars.vue'
import FourStars from './stars/FourStars.vue'
import FiveStars from './stars/FiveStars.vue'
import {
  EVENT_TYPE_GUNUNG,
  EVENT_TYPE_PANTAI,
  EVENT_TYPE_KULINER,
  EVENT_TYPE_BUDAYA,
} from '~/static/static_event_type'
export default {
  components: { OneStars, TwoStars, ThreeStars, FourStars, FiveStars },
  props: {
    event : {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pantai: EVENT_TYPE_PANTAI,
      gunung: EVENT_TYPE_GUNUNG,
      kuliner: EVENT_TYPE_KULINER,
      budaya: EVENT_TYPE_BUDAYA,
    }
  },
}
</script>

<style></style>
