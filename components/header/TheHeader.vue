<template>
  <div class="the-navbar">
    <div class="container mx-auto">
      <div class="container v-line"></div>
      <the-top-header/>
      <div class="h-line"></div>
      <div class="navbar">
        <div class="grid grid-cols-12 gap-4">
          <div class="col-span-2">
            <a href="/">
              <h-logo/>
            </a>
          </div>
          <div class="col-span-10" style="display: flex">
            <ul class="navbar-menu">
              <li>
                <NuxtLink :to="localePath('/products')">{{ $t('products') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/price-list')">{{ $t('price_list') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/services')">{{ $t('services') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/about')">{{ $t('about') }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="localePath('/contacts')">{{ $t('contacts') }}</NuxtLink>
              </li>
              <li>
                <language-input/>
              </li>
              <li>
                <a href="" class="btn">
                  {{ $t('call_request') }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LanguageInput from "~/components/inputs/LanguageInput";
import TheTopHeader from "./TheTopHeader";
import HLogo from "../logo/HLogo";

export default {
  name: "THeader",
  components: {HLogo, TheTopHeader, LanguageInput}
}
</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 999;
  height: 60px;
  padding: 20px 0 0 0;
}

.navbar-menu {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navbar-menu li {
  margin-left: 40px;
}

.navbar-menu li a {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
}

.h-line {
  position: absolute;
  width: 100vw;
  height: 1px;
  background: #EBEBEB;
  opacity: 0.1;
  right: 0;
  left: 0;
}

.v-line{
  position: relative;
}
.v-line:before{
  content: '';
  position: absolute;
  height: 100vh;
  width: 1px;
  background: #EBEBEB;
  opacity: 0.1;
  top: 0;
  left: 0;
}
.v-line:after {
  content: '';
  position: absolute;
  height: 100vh;
  width: 1px;
  background: #EBEBEB;
  opacity: 0.1;
  top: 0;
  right: 0;
}
.btn{
  padding: 9px 25px;
  border: 1px solid #FFFFFF;
}
</style>
