<template>
  <div class="lang-dropdown">
    <label>
      <select v-model="selectedValue" @change="onChange(selectedValue)">
        <option
          v-for="locale in $i18n.locales"
          :key="locale.code"
          :value="locale.code"
        >
          {{ locale.name }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "LanguageInput",
  data() {
    return {
      selectedValue: "",
    };
  },
  created() {
    this.selectedValue = this.$i18n.locale;
  },
  methods: {
    onChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    },
  },
};
</script>

<style scoped>
label {
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}
select {
  background-color: transparent;
}
</style>
