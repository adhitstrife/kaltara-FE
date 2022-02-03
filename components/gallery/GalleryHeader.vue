<template>
  <div class="header-gallery">
    <div class="navbar px-4 sm:px-8 2xl:px-60 md:px-16 pb-10">
      <navbar-white />
    </div>
    <div class="text-section header-gallery-content min-h-screen px-4 sm:px-8 2xl:px-60 md:px-16 pb-10">
      <div
        class="hero-text md:pb-6 text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold"
      >
        <p class="leading-normal text-center">
          Berkunjung Ke<br />
          Kalimantan Utara
        </p>
      </div>
      <div
        class="desc font-normal text-sm md:text-base leading-7"
      >
        <p class="text-center">
          Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi <br>
          di Bandung sangat cocok jadi tempat rileksasi pikiran.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header-gallery-content {
        background: url('~/assets/images/gallery-header.png') no-repeat center top scroll;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }
</style>
