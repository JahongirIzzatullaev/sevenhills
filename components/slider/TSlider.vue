<template>
    <client-only>
      <vue-displacement-slideshow
        :images="images"
        :displacement="displacement"
        :intensity="0.05"
        :speedIn="1"
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
  props: {
    indexImg: {
      type: Number,
      required: true
    },
  },
  components: {
    VueDisplacementSlideshow
  },
  data() {
    return {displacement: displacement}
  },
  computed: {
    images() {
      return [image1, image2, image3]
    }
  },
  methods: {},
  mounted() {
    setInterval(() => {
      // this.$refs.slideshow?.next();
    }, 3000);
  },
  watch: {
    indexImg() {
      this.$refs.slideshow?.goTo(this.indexImg);
    }
  }
};
</script>

<style scoped>

</style>
