<template>
  <div
    class="
      footer
      px-4
      sm:px-8
      md:px-16
      2xl:px-60
      flex flex-col xl:flex-row xl:flex-wrap
      bg-footerColor
      py-20
      text-white
    "
  >
    <div class="mt-6 xl:mt-0 bran xl:w-1/5">
      <div class="site-logo items-center flex">
        <div class="logo">
          <logo-small />
        </div>
        <div class="site-name mx-6 text-2xl font-semibold leading-9">
          Visit Kaltra
        </div>
      </div>
      <div class="social-media">
        <footer-sosmed />
      </div>
    </div>
    <div class="mt-6 xl:mt-0 kabupaten md:w-1/5">
      <div
        class="footer-title font-semibold text-base leading-5 tracking-wider"
      >
        KABUPATEN
      </div>
      <div class="kabupaten-list">
        <ul class="mt-4 opacity-75">
          <li class="mt-4">Bulungan</li>
          <li class="mt-4">Malinau</li>
          <li class="mt-4">Nunukan</li>
          <li class="mt-4">Tana Tidung</li>
          <li class="mt-4">Tarakan</li>
        </ul>
      </div>
    </div>
    <div class="mt-6 xl:mt-0 informasi md:w-1/5">
      <div
        class="footer-title font-semibold text-base leading-5 tracking-wider"
      >
        INFORMASI
      </div>
      <div class="information-list">
        <ul class="mt-4 opacity-75">
          <li class="mt-4">Cafe & Hiburan</li>
          <li class="mt-4">Hotel</li>
          <li class="mt-4">Transportasi</li>
          <li class="mt-4">Pelaayanan publik</li>
        </ul>
      </div>
    </div>
    <div class="mt-6 xl:mt-0 wisata md:w-1/5">
      <div
        class="footer-title font-semibold text-base leading-5 tracking-wider"
      >
        WISATA
      </div>
      <div class="information-list">
        <ul class="mt-4 opacity-75">
          <li class="mt-4">Budaya</li>
          <li class="mt-4">Gunung</li>
          <li class="mt-4">Kuliner</li>
          <li class="mt-4">Laut</li>
        </ul>
      </div>
    </div>
    <div class="mt-6 xl:mt-0 panduan md:w-1/5">
      <div
        class="footer-title font-semibold text-base leading-5 tracking-wider"
      >
        Panduan
      </div>
      <div class="information-list">
        <ul class="mt-4 opacity-75">
          <li class="mt-4">Vaksinasi</li>
          <li class="mt-4">Visa dan Imigrasi</li>
          <li class="mt-4">Transportasi</li>
          <li class="mt-4">Pelaayanan publik</li>
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
import FooterSosmed from './FooterSosmed.vue'
import LogoSmall from './LogoSmall.vue'

export default {
  components: { LogoSmall, FooterSosmed},
}
</script>

<style></style>
