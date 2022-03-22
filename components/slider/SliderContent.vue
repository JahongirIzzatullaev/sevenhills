<template>
  <div>
    <p class="text-5xl">
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

</style>
