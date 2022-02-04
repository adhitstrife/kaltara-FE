<template>
  <div
    class="header-kaltra min-h-screen px-4 sm:px-8 2xl:px-60 md:px-16 pb-10"
  >
    <Navbar />
    <div class="header-content h-full flex items-center mt-32">
      <div class="search-bar-and-hero w-full">
        <div
          class="hero-text text-center text-2xl md:text-3xl xl:text-5xl 2xl:text-6xl text-white font-bold"
        >
          <p class="leading-normal">
            Belum punya tujuan wisata?<br />
            Kunjungi Kalimantan
          </p>
        </div>
        <div class="searchbar flex justify-center mt-16">
          <div
            class="searchField flex items-center w-full xl:w-2/5 bg-white opacity-80 rounded-md py-2 px-5"
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0238 12.9C13.4012 11.654 14.27 9.83098 14.27 7.8C14.27 4.04446 11.2994 1 7.635 1C3.97059 1 1 4.04446 1 7.8C1 11.5555 3.97059 14.6 7.635 14.6C9.31771 14.6 10.8541 13.958 12.0238 12.9ZM12.0238 12.9L17 18"
                stroke="#A0A6AE"
                stroke-width="2"
              />
            </svg>
            <input
              id=""
              type="text"
              name="
                search"
              placeholder="Ragam wisata alam, kuliner dan budaya Kalimantan Utara..."
              class="w-full bg-transparent mx-4 focus:outline-none"
            />
            <div class="button bg-white opacity-100">
              <button class="bg-headerButton px-6 py-2 opacity-100 text-white">
                Cari
              </button>
            </div>
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
.header-kaltra {
  background: url('~/assets/images/index-header.png') no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
