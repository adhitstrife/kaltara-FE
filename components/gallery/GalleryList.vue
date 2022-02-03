<template>
  <div class="bg-gray-100 px-4 sm:px-8 md:px-16 2xl:px-60">
    <div class="title text-center pt-32 text-4xl font-bold">Galeri Lainya</div>
    <div v-if="listGallery" class="galeri-list p-4 md:flex md:flex-wrap">
        <div v-for="item in listGallery.results" :key="item.id" class="galery-card p-4  my-4 md:my-0 md:w-1/2 xl:w-1/3 rounded-md">
            <div class="wrapper bg-white p-4">
                <div class="content">
                    <div v-if="item.content_type == 'image'" class="image">
                        <img :src="item.path" alt="" srcset="" class="w-full h-60 rounded-md">
                    </div>
                    <div v-if="item.content_type == 'video'" class="video">
                        <iframe :src="item.url" frameborder="0" class="w-full h-60 rounded-md"></iframe>
                    </div>
                </div>
                <div class="content-type py-4 text-md text-blue-300 font-normal">
                    {{ item.content_type }}
                </div>
                <div class="content-title text-xl font-semibold">
                    {{ item.title }}
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  computed: {
    ...mapGetters({
      listGallery: 'gallery/getGallery',
    }),
  },
  async mounted() {
    await this.getGallery()
  },
  methods: {
    ...mapActions({
      getGallery: 'gallery/getGalleryList',
    }),
  },
}
</script>

<style></style>
