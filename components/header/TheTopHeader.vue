<template>
  <div class="top-navbar">
    <ul>
      <li>
        <a href="tel:+18475555555"> +998 91 345 01 98</a>
      </li>
      <li>
        <a href="mailto:info@sevenhillsagro.com">info@sevenhillsagro.com</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TheTopHeader"
}
</script>

<style scoped>
.top-navbar {
  width: 100%;
  height: 48px;
  position: relative;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-navbar ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-navbar ul li:last-child {
  margin-left: 75px;
}

.top-navbar ul li a{
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.025em;
  color: #FFFFFF;
}


</style>
