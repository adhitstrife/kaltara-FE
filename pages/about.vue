<template>
  <main-layout class="about">
    <div class="header">
        <header-about />
    </div>
    <div class="content xl:flex p-4 sm:p-8 md:p-16 xl:pl-navPaddingLeft">
        <div class="content-text xl:w-1/2 lg:p-5">
          <about-content-text />
        </div>
        <div class="content-map xl:w-1/2 lg:p-5 mt-16">
          <map-frame />
        </div>
    </div>
    <div class="district-list">
        <district-list/>
    </div>
    <div class="event">
      <event />
    </div>
  </main-layout>
</template>

<script>
import AboutContentText from '~/components/about/AboutContentText.vue'
import HeaderAbout from '~/components/about/HeaderAbout.vue'
import MapFrame from '~/components/about/MapFrame.vue'
import MainLayout from "~/components/Main.vue";
export default {
  components: { AboutContentText, HeaderAbout, MapFrame, MainLayout },
}
</script>

<style>

</style>
HeaderAboutMapFrame