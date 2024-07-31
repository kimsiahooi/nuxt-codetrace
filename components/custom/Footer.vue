<template>
  <footer class="bg-[#2D2D2D] -mt-32 lg:-mt-48 pt-32 lg:pt-48">
    <div class="container mx-auto">
      <div class="text-[#9c9c9c] flex flex-wrap -mx-4 gap-y-8 pb-8 lg:pb-12">
        <div class="w-full px-4 xl:w-1/4">
          <div class="space-y-5">
            <NuxtLink to="/">
              <img
                src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/site-logo-white.png"
                alt="white logo"
                class="w-60" />
            </NuxtLink>
            <p>
              At Codetrace, we understand the evolving landscape of business operations and the increasing need for
              seamless digital solutions to stay competitive in today’s market.
            </p>
            <div class="flex gap-5">
              <a
                href="https://www.facebook.com/people/SQL-Account-Payroll-POS-CRM-ERP-Codetrace-Business-Solutions-SB/61557215462009/"
                target="_blank">
                <Icon name="i-fa6-brands-facebook" class="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/codetracecbs/" target="_blank">
                <Icon name="i-fa6-brands-instagram" class="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div class="w-full px-4 xl:w-1/6">
          <p class="text-white font-semibold text-xl mb-4">Navigations</p>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us">About Us</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 xl:w-1/6">
          <p class="text-white font-semibold text-xl mb-4">Products</p>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/">SQL Account</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us">SQL Payroll</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">Odoo ERP System</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 xl:w-1/6">
          <p class="text-white font-semibold text-xl mb-4">Tutorial</p>
          <ul class="space-y-4">
            <li>
              <NuxtLink to="/">SQL Account</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about-us">SQL Payroll</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact-us">Odoo ERP System</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-full px-4 xl:w-1/4">
          <p class="text-white font-semibold text-xl mb-4">Contact Details</p>
          <div class="space-y-5">
            <div>
              <p>Codetrace Business Solutions Sdn. Bhd.</p>
              <p>No 56, Jalan Teluk Kapas N27/N Sentral 27, Seksyen 27, 40400 Shah Alam, Selangor.</p>
            </div>
            <div>
              <p>Contact</p>
              <p>010-261 0122 / 014-397 7706</p>
            </div>
            <div>
              <p>Email</p>
              <p>codetracebs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-[#9c9c9c] py-3">
        <p>Codetrace &copy; Copyright Reserved {{ year }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = ref(2024)

onMounted(() => {
  year.value = new Date().getFullYear()
})
</script>
