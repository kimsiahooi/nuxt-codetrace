<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  font-family: 'Nunito Sans', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  @apply text-primary font-extrabold;
}

h1 {
  @apply text-3xl md:text-5xl;
}

h2 {
  @apply text-3xl md:text-4xl;
}

h3 {
  @apply text-2xl md:text-3xl;
}

h4 {
  @apply text-2xl;
}

h5 {
  @apply text-xl;
}

h6 {
  @apply text-lg;
}

.swiper-button-prev,
.swiper-button-next {
  @apply bg-primary w-[30px] h-[30px] inline-block;

  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;

  &::after {
    @apply hidden;
  }
}

.swiper-button-prev {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m15 18l-6-6l6-6'/%3E%3C/svg%3E");
}

.swiper-button-next {
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m9 18l6-6l-6-6'/%3E%3C/svg%3E");
}
</style>
