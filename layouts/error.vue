<template>
  <div class="mx-auto container error">
    <h3 class="mt-10 text-center text-5xl font-bold">404</h3>
    <p class="mt-3 mb-4">Page not Found</p>
    <Nuxt-link to="/" class="btn">Back to Home</Nuxt-link>
  </div>
</template>

<style>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
