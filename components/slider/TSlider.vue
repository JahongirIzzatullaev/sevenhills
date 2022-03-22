<template>
  <client-only>
    <vue-displacement-slideshow
      :images="images"
      :displacement="displacement"
      :intensity="0.05"
      :speedIn="2"
      :speedOut="1"
      ease="Expo.easeInOut"
      ref="slideshow">
    </vue-displacement-slideshow>

  </client-only>
</template>

<script>
import VueDisplacementSlideshow from "vue-displacement-slideshow";
import image1 from "../../static/assets/images/1.jpeg";
import image2 from "../../static/assets/images/2.jpeg";
import image3 from "../../static/assets/images/3.jpeg";
import displacement from "../../static/assets/images/displacement.png";

export default {
  name: "TSlider",
  components: {
    VueDisplacementSlideshow
  },
  data() {
    return {displacement: displacement,}
  },
  computed: {
    images() {
      return [image3, image1, image2]
    }
  },
  methods: {},
  mounted() {
    setInterval(() => {
      this.$refs.slideshow?.next();
    }, 1000);
  },
};
</script>

<style scoped>

</style>
