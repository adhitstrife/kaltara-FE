<template>
    <div class="main-layout">
        <slot />
        <div class="footer">
            <page-footer />
        </div>
        <div class="wonderfull-indonesia">
            <woderfull-indonesia />
        </div>
    </div> 
</template>

<script>
import WoderfullIndonesia from './WoderfullIndonesia.vue'
export default {
    name: 'MainLayout',
    components: { WoderfullIndonesia },

}
</script>

<style>

</style>