<template>
  <div class="gallery">
    <div class="header">
      <gallery-header />
    </div>
    <div class="gallery-content">
      <div class="wonderfull-kaltara">
        <wonderfull-kaltra />
      </div>
      <div class="tourism">
        <tourism-white />
      </div>
      <div class="gallery-list">
        <gallery-list />
      </div>
      <div class="footer">
        <page-footer />
      </div>
      <div class="website-cc">
        <woderfull-indonesia />
      </div>
    </div>
  </div>
</template>

<script>
import GalleryList from '~/components/gallery/GalleryList.vue'
import TourismWhite from '~/components/gallery/TourismWhite.vue'
import WonderfullKaltra from '~/components/WonderfullKaltra.vue'
export default {
  components: { WonderfullKaltra, TourismWhite, GalleryList },
}
</script>

<style></style>
