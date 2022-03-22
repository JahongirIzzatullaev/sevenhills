<template>
  <div>
    <t-header/>
    <div style="height: 100vh">
      <home-slider/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import THeader from "~/components/header/THeader.vue";
import HomeSlider from "~/components/slider/HomeSlider.vue";

export default Vue.extend({
  name: 'IndexPage',
  components: {HomeSlider, THeader}
})
</script>
