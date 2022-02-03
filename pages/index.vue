<template>
  <div class="main">
    <div class="header">
      <Header />
    </div>
    <div class="explore-">
      <ExploreKaltra />
    </div>
    <div class="wonderfull-kaltara">
      <wonderfull-kaltra />
    </div>
    <div class="event">
      <event />
    </div>
    <div class="tourism">
      <tourism />
    </div>
    <div class="informatio">
      <latest-information />
    </div>
    <div class="footer">
      <page-footer />
    </div>
    <div class="wonderfull-indonesia">
      <woderfull-indonesia />
    </div>
  </div>
</template>

<script>
import Event from '~/components/Event.vue'
import LatestInformation from '~/components/LatestInformation.vue'
import Tourism from '~/components/Tourism.vue'
import WonderfullKaltra from '~/components/WonderfullKaltra.vue'
import PageFooter from "~/components/PageFooter.vue";
import WoderfullIndonesia from '~/components/WoderfullIndonesia.vue'
export default {
  components: {WonderfullKaltra, Event, Tourism, LatestInformation, PageFooter  }
}
</script>
,
    WoderfullIndonesia