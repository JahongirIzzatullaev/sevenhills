<template>
  <div class="lang-dropdown">
    <label>
      <select v-model="$i18n.locale" @change="onChange($i18n.locale)">
        <option
          v-for="lang in $i18n.locales"
          :key="lang.code"
          :value="lang.code"
        >
          {{ lang.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "LanguageInput",
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
      this.$router.go(this.$router.currentRoute)
    }
  }
}
</script>

<style scoped>
label {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
}
select{
  background-color: transparent;
}
</style>
