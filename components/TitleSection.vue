<template>
  <div class="xl:flex pt-10 md:pt-20 md:pb-14 pb-6">
      <div class="titleText text-xl md:text-3xl md:leading-relaxed font-bold">
        <p>{{ title1 }}<br/>{{title2}}</p>
      </div>
      <div v-if="description" class="description mt-5 md:mt-0 xl:w-2/6 md:leading-relaxed md:py-4 xl:ml-40">
        {{ description }}
      </div>
  </div>
</template>

<script>
export default {
    props: {
      title1 : {
        type: String,
        default: 'Title 1'
      },
      title2 : {
        type: String,
        default: ''
      },
      description : {
        type: String,
        default: ''
      }
    }
}
</script>

<style>

</style>