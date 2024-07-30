<template>
  <header>
    <div class="bg-[#6F2C911A]">
      <div class="container mx-auto py-2">
        <p class="text-center text-primary font-semibold leading-snug">
          Get minimum <span class="font-black">10% referral fee</span> for each new customer reffered. Contact us to
          know more.
        </p>
      </div>
    </div>
    <div class="py-5">
      <div class="container mx-auto">
        <div class="flex items-center justify-between">
          <NuxtLink to="/">
            <img class="w-52" src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/site-logo.png" alt="logo" />
          </NuxtLink>

          <ul class="flex items-center gap-x-7 xl:gap-x-14">
            <li v-for="navlink in navlinks" :key="navlink.href">
              <NuxtLink
                v-if="navlink.button"
                :to="navlink.href"
                class="text-white py-2 px-4 bg-secondary rounded-full"
                >{{ navlink.name }}</NuxtLink
              >
              <NuxtLink v-else-if="navlink.href !== '#'" :to="navlink.href" active-class="text-secondary">{{
                navlink.name
              }}</NuxtLink>
              <a class="cursor-pointer" v-else :href="navlink.href">{{ navlink.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navlinks } from '@/contants/navlinks'
</script>
