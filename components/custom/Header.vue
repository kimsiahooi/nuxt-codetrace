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

          <div>
            <ul class="hidden lg:flex items-center gap-x-7 xl:gap-x-14">
              <li v-for="navlink in navlinks" :key="navlink.href">
                <NuxtLink
                  v-if="navlink.button"
                  :to="navlink.href"
                  class="text-white py-2 px-4 bg-secondary rounded-full inline-block"
                  >{{ navlink.name }}</NuxtLink
                >
                <NuxtLink
                  v-else-if="navlink.href !== '#'"
                  :to="navlink.href"
                  class="inline-block"
                  ctive-class="text-secondary"
                  >{{ navlink.name }}</NuxtLink
                >
                <a class="cursor-pointer inline-block" v-else :href="navlink.href">{{ navlink.name }}</a>
              </li>
            </ul>

            <ClientOnly>
              <Sheet>
                <SheetTrigger class="lg:hidden">
                  <Button variant="outline" size="icon" class="hover:bg-primary/5">
                    <Icon name="lucide:menu" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <VisuallyHidden>
                      <SheetTitle></SheetTitle>
                    </VisuallyHidden>
                    <SheetDescription>
                      <ul class="text-lg space-y-4 text-left">
                        <li v-for="navlink in navlinks" :key="navlink.href">
                          <SheetClose>
                            <NuxtLink
                              v-if="navlink.button"
                              :to="navlink.href"
                              class="text-white py-2 px-4 bg-secondary rounded-full inline-block"
                              >{{ navlink.name }}
                            </NuxtLink>
                            <NuxtLink
                              v-else-if="navlink.href !== '#'"
                              :to="navlink.href"
                              class="inline-block"
                              active-class="text-secondary"
                              >{{ navlink.name }}
                            </NuxtLink>
                            <a class="cursor-pointer inline-block" v-else :href="navlink.href">{{ navlink.name }}</a>
                          </SheetClose>
                        </li>
                      </ul>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { navlinks } from '@/contants/navlinks'
import { VisuallyHidden } from 'radix-vue'
</script>
