<template>
  <div>
    <NavBar />
    <nuxt />
    <EnterPresale />
    <PageFooter />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import EnterPresale from "../components/EnterPresale.vue";
import PageFooter from "../components/PageFooter.vue";
export default {
  components: { NavBar, EnterPresale, PageFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");

html {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background: #000;
  color: #fff;
}

body {
  overflow-x: hidden;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

p {
  line-height: 1.6;
}
</style>
