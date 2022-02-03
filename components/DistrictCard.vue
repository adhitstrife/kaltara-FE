<template>
  <div class="rounded-lg" :style="style">
    <div class="card h-80 lg:h-96 md:h-72 flex items-end md:w-full">
      <p class="text-center w-full text-white text-xl font-semibold py-6 px-2">
        {{ district }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    district : {
      type: String,
      default: null
    },
    image : {
      type: String,
      default: require('~/assets/images/bulungan.jpg')
    }
  },
  computed: {
    style() {
      return (
        'background: url(' +
        this.image +
        ') no-repeat center center; background-size: cover'
      )
    },
  },
}
</script>

<style></style>
