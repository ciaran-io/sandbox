<template>
  <div class="text-5xl bg-red-600">
    Hello from Nuxt3
    <nuxt-img
      src="/hero.jpg"
      quality="80"
      width="200"
      height="100"
      format="webp"
    />
  </div>
</template>

<style lang="postcss">
  div {
    @apply container mx-auto bg-emerald-600 text-red-400;
  }
</style>
