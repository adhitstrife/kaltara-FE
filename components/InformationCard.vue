<template>
  <div class="card-information w-full p-2">
    <div class="w-80 xl:w-60">
      <img class="w-full" src="~/assets/images/hotel.png" alt="" srcset="" />
    </div>
    <div class="subtitle my-4">
      <p class="text-xl font-semibold">{{ title }}</p>
    </div>
    <div class="description">
      <p v-if="description">
        {{ description }}
      </p>
      <p v-else>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
        aliquet diam, tristique turpis neque, hac id.
      </p>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        title : {
          type: String,
          default: ''
        },
        description: {
          type: String,
          default: ''
        },
        image: {
          type: String,
          default: ''
        }
    }
}
</script>

<style></style>
