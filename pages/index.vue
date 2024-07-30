<template>
  <section class="bg-gradient-to-b from-transparent to-[#fdebee]">
    <div class="container mx-auto">
      <Swiper :modules="[SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true" navigation :speed="1000">
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/home-banner-1.webp)">
              <h2 class="mb-5">SQL Accouting <span class="font-normal">Software</span></h2>
              <div class="space-y-5">
                <p>
                  As the number one accounting software for e-invoicing, SQL Accounting Software is trusted by
                  businesses worldwide for its reliability, effciency, and comprehensive features.
                </p>
                <p>
                  Whether you're a small startup or a large corporation, SQL Accouting Software is tailored to meet your
                  accounting needs and stramline your financial processes.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/sql-banner-3-1.webp)">
              <h2 class="mb-5">SQL <span class="font-normal">Payroll</span></h2>
              <div class="space-y-5">
                <p>
                  Easily process and print from one to hundreds of employee's pay slip with just a few mouse click.
                  Virtually keep unlimited payroll history and have your data safe with strong security and data
                  protection.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="
                background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/odoo-erp-system.webp);
              ">
              <h2 class="mb-2">Odoo ERP System</h2>
              <h5 class="mb-5 font-normal">(Enterprise Resources Planning Software)</h5>
              <div class="space-y-5">
                <p>
                  Odoo ERP is a comprehensive, open-source suite of business application designed to meet all your
                  organizational needs. Whether you are looking to manage customer relationships, run an eCommerce
                  platform, handle accouting, control inventory, facilitate point of sale transactions, or oversee
                  projects, Odoo has you covered.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/sql-banner-2-1.webp)">
              <h2 class="mb-5">SQL MOBILE POS - <span class="font-normal">Handled Mobile Device</span></h2>
              <div class="space-y-5">
                <p>
                  Designed specifically for small businesses and shop owners, SQL mobile POS offers a comprehensive
                  solution to streamline your operations and enhance customer experiences.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="
                background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/sql-banner-4-1-1.webp);
              ">
              <h2 class="mb-5">SQL POS <span class="font-normal">System</span></h2>
              <div class="space-y-5">
                <p>
                  SQL POS offers seamless integration with SQL Account, ensuring real-time inventory synchronization and
                  centralized management for retail businesses. It supports multiple payment methods, provides a fast
                  touch-screen interface, and includes robust customer support. Ideal for various industires like mini
                  markets and pharmacies, SQL POS enhances eggiciency with features for managing multiple warehouse and
                  batch expiry dates.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/outsourcing.webp)">
              <h2 class="mb-5">Outsourcing <span class="font-normal">Acc & Payroll</span></h2>
              <div class="space-y-5">
                <p>
                  Our company offers comprehensive Account and Payroll outsourcing services designed to stramline your
                  business operations. We handle all accounting tasks, including Bookkeeping, accounts payable and
                  receivable management, payroll processing, financial reporting, tax preparation, and complicance
                  services, reducing administrative burden and enhancing efficiency. By outsourcing these functions to
                  us, you can focus on your core business activities while enjoying cost savings and expert support.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Home',
})

useHead({
  link: [{ rel: 'canonical', href: 'http://localhost:3000' }],
})
</script>
