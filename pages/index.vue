<template>
  <div class="app">
    <t-header/>
    <home-slider/>
    <div class="container mx-auto">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at consectetur dolor dolore, dolores ducimus
        ipsa ipsum nihil non omnis quidem rem tenetur! Autem culpa dignissimos facilis laudantium magnam, tenetur.
      </p>


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

