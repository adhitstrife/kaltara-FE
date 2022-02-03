<template>
  <div
    class=""
  >
    <div class="nav-content flex flex-col py-4 lg:flex-row lg:h-navHeight font-sans  w-full">
      <div class="brand">
        <LogoSmall />
      </div>
      <div
        class="nav-link md:w-full my-4 sm:my-0 md:my-0 md:flex md:items-center"
      >
        <ul
          class="
            flex
            font-semibold
            leading-7
            flex-col
            lg:flex-row lg:justify-center
            w-full
          "
        >
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8 cursor-pointer"
            :class="activeNavbar == 'home' ? 'border-b-2' : ''"
            @click="goTo('home')"
          >
            HOME
          </li>
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8 cursor-pointer"
            :class="activeNavbar == 'about' ? 'border-b-2' : ''"
            @click="goTo('about')"
          >
            TENTANG
          </li>
          <li class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8">INFORMASI</li>
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8 cursor-pointer"
            :class="activeNavbar == 'gallery' ? 'border-b-2' : ''"
            @click="goTo('gallery')"
          >
            GALLERY
          </li>
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8 cursor-pointer"
            :class="activeNavbar == 'tourism' ? 'border-b-2' : ''"
            @click="goTo('tourism')"
          >
            WISATA
          </li>
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8"
            :class="activeNavbar == 'gis' ? 'border-b-2' : ''"
            @click="goTo('gis')"
          >
            GIS
          </li>
          <li
            class="py-1 sm:py-2 md:mx-2 xl:mx-4 2xl:mx-8 cursor-pointer"
            :class="activeNavbar == 'event' ? 'border-b-2' : ''"
            @click="goTo('event')"
          >
            EVENT
          </li>
        </ul>
      </div>
      <div
        class="
          lang
          xl:w-1/3
          my-4
          sm:my-0
          md:my-0
          flex
          items-center
          lg:justify-end
        "
      >
        <img class="mr-1 md:h-10 md:w-10" :src="langIcon" alt="" srcset="" />
        <select
          id="lang"
          class="mx-1 font-semibold focus:border-transparent bg-transparent"
          name="language"
        >
          <option value="ina">Indonesia</option>
          <option value="en">English</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: '',
      logo: require('assets/images/logoBig.svg'),
      langIcon: require('assets/images/lang.svg'),
    }
  },
  computed: {
    setActiveNAvbar() {
      return this.$store.commit('navbar/changeActive', 'home')
    },
    activeNavbar() {
      return this.$store.getters['navbar/getActive']
    },
  },
  methods: {
        goTo(text) {
          this.$store.commit('navbar/changeActive', text)
    
          if (text === 'home') {
            this.$router.push('/')
          }
    
          if (text === 'about') {
            this.$router.push('/about')
          }
    
          if (text === 'tourism') {
            this.$router.push('/wisata')
          }
    
          if (text === 'event') {
            this.$router.push('/event')
          }
    
          if (text === 'gallery') {
            this.$router.push('/gallery')
          }
    
          if (text === 'gis') {
            this.$router.push('/gis')
          }
        },
  },
}
</script>

<style>
#lang {
  /* for Firefox */
  -moz-appearance: none;
  /* for Safari, Chrome, Opera */
  -webkit-appearance: none;
}
</style>
