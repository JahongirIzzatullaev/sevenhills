<template>
  <div class="splash-screen">
    <the-logo data-aos="zoom-in"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"/>
  </div>
</template>

<style scoped>
.splash-screen {
  background: #f2f0ee;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
}
</style>
<script>
import TheLogo from "../logo/TheLogo";

export default {
  components: {TheLogo}
}
</script>
