<template>
  <div class="slider-section">
    <div class="slider-content">
      <div class="container mx-auto">
        <transition name="slide-fade" mode="out-in">
          <slider-content :key="activeIndex" :content="content[activeIndex]"/>
        </transition>
      </div>
      <div class="navigation-btn">
        <div class="l-arrow-group">
          <button @click="goToImage" class="home-arrow" aria-label="Previous" type="button"
                  style="">
            <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.266333 5.79632C0.282497 5.90408 0.330989 6.00375 0.40642 6.08187L4.54435 10.3922C4.63662 10.5013 4.7693 10.5673 4.9114 10.5747C5.05351 10.5828 5.19292 10.5316 5.29597 10.434C5.39969 10.3356 5.45761 10.1989 5.45694 10.0568C5.45694 9.91403 5.39767 9.77866 5.29328 9.68101L1.49483 5.72618L5.29328 1.77135C5.39767 1.67369 5.45694 1.53832 5.45694 1.39554C5.45761 1.25343 5.39969 1.11671 5.29597 1.01838C5.19293 0.920727 5.05352 0.869543 4.9114 0.877624C4.7693 0.885032 4.63661 0.951035 4.54435 1.06014L0.407109 5.37049C0.298004 5.48363 0.246818 5.64055 0.267023 5.79614L0.266333 5.79632Z"></path>
            </svg>
          </button>
          <button @click="goToImage" class="home-arrow" aria-label="Next" type="button">
            <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.5613 5.65632C5.54514 5.54856 5.49665 5.44889 5.42122 5.37077L1.28329 1.06042C1.19102 0.951318 1.05834 0.88532 0.916234 0.877906C0.774128 0.869824 0.634717 0.921009 0.531665 1.01867C0.427948 1.117 0.370027 1.25372 0.370701 1.39582C0.370701 1.5386 0.429969 1.67398 0.53436 1.77163L4.33281 5.72646L0.53436 9.68129C0.429969 9.77894 0.370701 9.91432 0.370701 10.0571C0.370028 10.1992 0.427948 10.3359 0.531665 10.4343C0.63471 10.5319 0.774114 10.5831 0.916234 10.575C1.05834 10.5676 1.19103 10.5016 1.28329 10.3925L5.42053 6.08215C5.52963 5.969 5.58082 5.81208 5.56061 5.6565L5.5613 5.65632Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <t-slider :index-img="activeIndex" class="slider-images"/>
  </div>
</template>

<script>
import TSlider from "./TSlider";
import SliderContent from "~/components/slider/SliderContent";

export default {
  name: "HomeSlider",
  components: {SliderContent, TSlider},
  data() {
    return {
      activeIndex: 0,
      content: [{
        title: 'Seven hills agro - 1'
      }, {
        title: 'Seven hills agro - 2'
      }, {
        title: 'Seven hills agro - 3'
      }],
    }
  },
  methods: {
    goToImage() {
      this.activeIndex++;
      this.activeIndex = this.activeIndex % 3;
    }
  },
}
</script>

<style scoped>
.slider-section {
  height: calc(100vh - 60px);
  position: relative;
}

.slider-images {
  height: 100%;
  width: 100%;
  z-index: -1;
  position: absolute;
}

.slider-content {
  width: 100%;
  height: calc(100vh - 60px);
  position: absolute;
  z-index: 1;
}

.navigation-btn {
  position: absolute;
  bottom: 50px;
  left: 50px;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}

.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.l-arrow-group {
  display: flex;
}

.l-arrow-group .home-arrow {
  width: 34px;
  height: 34px;
  display: flex;
  font-size: 10px;
  position: relative;
  margin-right: 8px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  overflow: hidden;
  border: none;
  transform: translateY(0);
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.075s;
}

.l-arrow-group .home-arrow:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.l-arrow-group .home-arrow:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: -35%;
  left: 0;
  background-image: url('./static/assets/images/btn-bg.png');
  background-position: 0 -50%;
  background-size: 300%;
  background-repeat: repeat-x;
  animation-name: wave;
  animation-duration: 2.5s;
  transform: translateY(100%);
  animation-iteration-count: infinite;
  transition: all 0.75s cubic-bezier(0.3, 0.1, 0.3, 1);
}

.l-arrow-group .home-arrow svg {
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.075s;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  z-index: 2;
}

.l-arrow-group .home-arrow svg path {
  fill: #ffffff;
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1) 0.075s;
}

.l-arrow-group .home-arrow:hover {
  background-position: 100% 50%;
}

.l-arrow-group .home-arrow:hover:after {
  transition-delay: 0s;
  transform: translateY(-25%);
  top: -20px;
  bottom: -20px;
}

.l-arrow-group .home-arrow:hover svg path {
  fill: #232B37;
  transition-delay: 0.075s;
}

.l-arrow-group .home-arrow.home-prev:after {
  -webkit-transform-origin: center right;
  -ms-transform-origin: center right;
  transform-origin: center right;
}

</style>
