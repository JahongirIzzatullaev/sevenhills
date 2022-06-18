<template>
  <div>
    <p class="text-5xl title-text">
      {{ content.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SliderContent",
  props: {
    content: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      display: false,
    }
  }
}
</script>

<style scoped>
.title-text {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 47px;
  text-transform: uppercase;
  color: #FFFFFF;
  padding-left: 20px;
  border-left: 1px solid #FFF;
}

</style>
