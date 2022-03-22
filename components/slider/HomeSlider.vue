<template>
  <div class="slider">
    <div class="slider-content">
      <div>
        <div class="container mx-auto"
        >
          <h1>SEVEN HILLS AGRO</h1>
        </div>
      </div>
    </div>
    <t-slider class="slider-img"/>
  </div>
</template>

<script>
import TSlider from "./TSlider";

export default {
  name: "HomeSlider",
  components: {TSlider}
}
</script>

<style scoped>
.slider {
  width: 100%;
  height: 100vh;
  position: relative;
  top: -50px;
}
.slider h1{
  font-size: 32px;
  color: white;
}

.slider-img {
  height: calc(100vh - 10px);
  z-index: -1;
  position: relative;
}

.slider-content {
  position: relative;
  z-index: 1;
  top: 50%;
}
</style>
