<template>
  <div :class="showHideSpinner?'loader':''">
    <the-loading-bar v-if="showHideSpinner"/>
    <t-header/>
    <Nuxt/>
    <the-footer/>
  </div>
</template>
<script>
import TheLoadingBar from "~/components/loader/TheLoadingBar.vue";
import THeader from "../components/header/TheHeader";
import TheFooter from "../components/footer/TheFooter";

export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({addSeoAttributes: true});
    return {
      htmlAttrs: {
        myAttribute: 'My Value',
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My Custom Description'
        },
        ...i18nHead.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nHead.link
      ]
    }
  },
  components: {TheFooter, THeader, TheLoadingBar},
  beforeCreate() {
    this.showHideSpinner = true;
  },
  mounted() {
    setTimeout(() => {
      this.showHideSpinner = false;
    }, 2000)
  },
  data() {
    return {
      showHideSpinner: true
    };
  }
}

</script>
<style scoped>
.loader {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
