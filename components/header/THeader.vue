<template>
  <div class="container mx-auto">
    <ul class="inline-grid grid-cols-4 gap-4 navbar">
      <li>
        <NuxtLink :to="localePath('/')">{{ $t('home.root') }}</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/about')">about</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localePath('/products')">products</NuxtLink>
      </li>
      <li>
        <language-input/>
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageInput from "~/components/inputs/LanguageInput";

export default {
  name: "THeader",
  components: {LanguageInput}
}
</script>

<style scoped>
  .navbar{
    position: relative;
    z-index: 999;
  }
</style>
