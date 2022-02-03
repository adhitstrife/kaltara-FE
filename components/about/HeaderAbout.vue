<template>
  <div class="header-about min-h-screen px-4 sm:px-8 2xl:px-60 md:px-16 pb-10">
    <Navbar />
    <div class="text-section xl:w-3/5 text-white">
      <div
        class="hero-text md:py-32 text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold"
      >
        <p class="leading-normal">
          Berkunjung Ke<br />
          Kalimantan Utara
        </p>
      </div>
      <div
        class="desc font-normal text-sm md:text-base leading-7 md:py-6 pr-20"
      >
        <p>
          Suasana sejuk dan pemandangan hijau di berbagai sudut dataran tinggi
          di Bandung sangat cocok jadi tempat rileksasi pikiran.
        </p>
      </div>
      <div
        class="point md:mt-10 w-1/2 md:flex md:border-t-2 md:border-white py-4"
      >
        <div
          class="keindahan-alam md:w-1/3 md:px-2 border-b-2 border-white py-4 md:py-0 md:border-b-0"
        >
          <div class="title text-base">Keindahan Alam</div>
          <div class="mini-desc text-xs md:mt-3">
            Kalimantan Utara memiliki keindahan alam yang mengagumkan
          </div>
        </div>
        <div
          class="kekayaan-budaya md:w-1/3 md:px-2 border-b-2 border-white py-4 md:py-0 md:border-b-0"
        >
          <div class="title text-base">Kekayaan Budaya</div>
          <div class="mini-desc text-xs md:mt-3">Kebudayaan yang melimpah</div>
        </div>
        <div
          class="pesona-pantai md:w-1/3 md:px-2 border-b-2 border-white py-4 md:py-0 md:border-b-0"
        >
          <div class="title text-base">Pesona Pantai</div>
          <div class="mini-desc text-xs md:mt-3">
            Bentangan pantai yang indah dan mempesona
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header-about {
  background: url('~/assets/images/about-header.png') no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
