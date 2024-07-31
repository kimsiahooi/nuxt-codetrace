<template>
  <section class="bg-gradient-to-b from-transparent to-[#fdebee]">
    <div class="container mx-auto">
      <Swiper :modules="[SwiperAutoplay, SwiperNavigation]" :slides-per-view="1" :loop="true" navigation :speed="1000">
        <SwiperSlide>
          <div class="text-center xl:px-52 pt-10">
            <div
              class="min-h-[550px] bg-bottom bg-no-repeat bg-contain"
              style="background-image: url(https://codetrace-bs.com.my/wp-content/uploads/2024/06/home-banner-1.webp)">
              <h2>SQL Accouting <span class="font-normal">Software</span></h2>
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

  <section class="pt-10 pb-5 lg:pt-14 lg:pb-7">
    <div class="container mx-auto">
      <div class="flex justify-center flex-wrap -mx-4 gap-y-8">
        <div v-for="icon in iconlist" :class="icon.containerClass">
          <div class="text-center space-y-5">
            <img :src="icon.imgUrl" :alt="icon.title" class="w-[50px] inline-block" />
            <p class="text-lg">{{ icon.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 lg:py-7">
    <div class="container mx-auto">
      <div class="flex flex-col gap-8 items-center md:flex-row">
        <div class="md:w-1/2">
          <img
            src="https://codetrace-bs.com.my/wp-content/uploads/2024/06/Your-One-Stop-Destination-for-Business-Digitalization-Solutions.webp"
            alt="Your One-Stop Destination for Business Digitalization Solutions" />
        </div>
        <div class="md:w-1/2">
          <h3>Your One-Stop Destination for Business Digitalization Solutions</h3>
          <div class="space-y-5 text-justify">
            <p>
              At Codetrace, we understand the evolving landscape of business operations and the increasing need for
              seamless digital solutions to stay competitive in today’s market.
            </p>
            <p>
              That’s why we offer a comprehensive suite of services aimed at streamlining your business processes and
              enhancing productivity.
            </p>
            <p>
              From point-of-sale (POS) systems to enterprise resource planning (ERP) solutions, we’ve got you covered
              every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 lg:py-7">
    <div class="container mx-auto">
      <h3>Our Range of Digital Solutions</h3>
      <div class="flex flex-wrap -mx-4 gap-y-4 md:gap-y-8">
        <div v-for="(range, index) in ranges" class="px-4 w-full md:w-1/2 xl:w-1/3 flex flex-col" :key="range.title">
          <div class="p-5 border transition rounded-lg group hover:border-primary space-y-5 flex-1">
            <p class="font-extrabold text-border transition group-hover:text-primary">
              {{ (index + 1).toString().padStart(2, '0') }}
            </p>
            <img :src="range.imageUrl" :alt="range.title" class="w-14" />
            <h5 class="font-semibold text-black group-hover:text-primary transition">{{ range.title }}</h5>
            <p class="text-justify !mt-3 !mb-5">
              {{ range.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 lg:py-7">
    <div class="container mx-auto">
      <div class="flex flex-col flex-wrap -mx-4 md:flex-row gap-y-5">
        <div class="w-full md:w-1/3 px-4">
          <h3>E-Invoice Introduction</h3>
        </div>
        <div class="w-full md:w-2/3 px-4">
          <div class="space-y-5">
            <p>In Malaysia, e-invoice is being implemented with two distinct yet complementing components, which is;</p>
            <ol class="space-y-3 list-decimal pl-5">
              <li>
                MDED has been mandated by the Government to implement e-invoice for business digitalisation using the
                Peppol framework
              </li>
              <li>
                Lembaga Hasil Dalam Negeri Malaysia (LHDNM) is undertaking the e-invoice for tax reporting and
                compliance
              </li>
            </ol>
            <p>
              These two components completes the e-invoice ecosystem in the country, and when business adopt
              interoperable e-invoice using Peppol framework, they will also fulfill the requirements for tax reporting
              as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 lg:py-7">
    <div class="container mx-auto">
      <p class="text-xl font-bold mb-5">E-Invoice Implementation Timeline</p>
      <div class="bg-[#512b73] p-8 rounded-xl text-white">
        <div class="flex flex-wrap flex-col -mx-4 gap-y-8 lg:flex-row">
          <div class="w-full px-4 lg:w-1/3 relative">
            <img
              src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/arrow.png"
              alt="arrow"
              class="lg:absolute lg:top-4 lg:right-4 hidden lg:block w-32 xl:right-12" />
            <div class="space-y-5">
              <h2 class="text-[#FFFFFF1A] font-bold text-4xl">Phase 1</h2>
              <p class="font-bold">1 August 2024</p>
              <div class="pl-7 relative">
                <ChevronRight class="w-5 h-5 absolute top-0 left-0" />
                <p>
                  Mandatory implementation for taxpayers with an
                  <span class="font-bold">annual turnover or revenue of > RM100m</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3 relative">
            <img
              src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/arrow.png"
              alt="arrow"
              class="lg:absolute lg:top-4 lg:right-4 hidden lg:block w-32 xl:right-12" />
            <div class="space-y-5">
              <h2 class="text-[#FFFFFF1A] font-bold text-4xl">Phase 2</h2>
              <p class="font-bold">1 January 2025</p>
              <div class="pl-7 relative">
                <ChevronRight class="w-5 h-5 absolute top-0 left-0" />
                <p>
                  Mandatory implementation for taxpayers with an
                  <span class="font-bold">annual turnover or revenue between RM25. to RM100m</span>
                </p>
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-1/3 relative">
            <div class="space-y-5">
              <h2 class="text-[#FFFFFF1A] font-bold text-4xl">Phase 3</h2>
              <p class="font-bold">1 July 2025</p>
              <div class="pl-7 relative">
                <ChevronRight class="w-5 h-5 absolute top-0 left-0" />
                <p>
                  Mandatory implementation for
                  <span class="font-bold">all other taxpayers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-5 lg:py-7">
    <div class="container mx-auto">
      <div class="text-center z-10 relative">
        <div>
          <p class="font-bold text-primary text-xl bg-gray-100 p-2 w-11/12 mx-auto rounded-lg max-w-96">
            Before E-Invoice
          </p>
        </div>
      </div>
      <div class="border border-gray-100 rounded-xl p-5 pt-10 -mt-5">
        <div>
          <div class="text-center space-y-4 mb-8">
            <p class="text-xl font-bold">Paper Invoice</p>
          </div>
          <div>
            <div class="flex flex-wrap -mx-4 justify-center gap-y-8 xl:hidden">
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 1</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Account-Receivable.svg"
                    alt="Account Receivable"
                    class="inline-block w-9" />
                  <p>Account Receivable</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 2</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Prepare-Invoice.svg"
                    alt="Prepare Invoice"
                    class="inline-block w-9" />
                  <p>Prepare Invoice</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 3</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Printout.svg"
                    alt="Printout"
                    class="inline-block w-9" />
                  <p>Printout</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 4</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Mailroom.svg"
                    alt="Mailroom"
                    class="inline-block w-9" />
                  <p>Mailroom</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 5</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Post.svg"
                    alt="Post"
                    class="inline-block w-9" />
                  <p>Post</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 6</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Mailroom.svg"
                    alt="Mailroom"
                    class="inline-block w-9" />
                  <p>Mailroom</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 7</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Routing.svg"
                    alt="Routing"
                    class="inline-block w-9" />
                  <p>Routing</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 8</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Data-Entry.svg"
                    alt="Data Entry"
                    class="inline-block w-9" />
                  <p>Data Entry</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 9</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Account-Payable.svg"
                    alt="Account Payable"
                    class="inline-block w-9" />
                  <p>Account Payable</p>
                </div>
              </div>
            </div>
            <div class="hidden xl:block">
              <div class="grid grid-cols-9">
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 2</h6>
                  <p>Prepare Invoice</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 4</h6>
                  <p>Mailroom</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 6</h6>
                  <p>Mailroom</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 8</h6>
                  <p>Data Entry</p>
                </div>
                <div></div>
              </div>
              <img
                src="https://codetrace-bs.com.my/wp-content/uploads/2024/06/paper-invoice-1.webp"
                alt="Paper Invoice"
                class="w-full" />
              <div class="grid grid-cols-9">
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 1</h6>
                  <p>Account Receivable</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 3</h6>
                  <p>Printout</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 5</h6>
                  <p>Post</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 7</h6>
                  <p>Routing</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-1/2">
                  <h6 class="font-bold !mb-2">Step 9</h6>
                  <p>Account Payable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="py-8">
          <div class="border-b border-gray-100"></div>
        </div>
        <div>
          <div class="text-center space-y-4 mb-8">
            <p class="text-xl font-bold">Invoice in PDF</p>
            <p>
              Invoice in PDF, Excel, Word or other relevant formats that does not involve system-to-system data
              transmission
            </p>
          </div>
          <div>
            <div class="flex flex-wrap -mx-4 justify-center gap-y-8 xl:hidden">
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 1</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Account-Receivable.svg"
                    alt="Account Receivable"
                    class="inline-block w-9" />
                  <p>Account Receivable</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 2</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Prepare-Invoice.svg"
                    alt="Prepare Invoice"
                    class="inline-block w-9" />
                  <p>Prepare Invoice</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 3</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/pdf.svg"
                    alt="Generate Invoice in PDF format"
                    class="inline-block w-9" />
                  <p>Generate Invoice in PDF format</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 4</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Post.svg"
                    alt="Send PDF invoice via email"
                    class="inline-block w-9" />
                  <p>Send PDF invoice via email</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 5</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/mail.svg"
                    alt="Receive PDF invoice in email"
                    class="inline-block w-9" />
                  <p>Receive PDF invoice in email</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 6</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Data-Entry.svg"
                    alt="Data Entry"
                    class="inline-block w-9" />
                  <p>Data Entry</p>
                </div>
              </div>
              <div class="px-4 w-1/2 md:w-1/3">
                <div class="text-center space-y-3">
                  <h6 class="font-bold !mb-0">Step 7</h6>
                  <img
                    src="https://codetrace-bs.com.my/wp-content/uploads/2024/04/Account-Payable.svg"
                    alt="Account Payable"
                    class="inline-block w-9" />
                  <p>Account Payable</p>
                </div>
              </div>
            </div>
            <div class="hidden xl:block">
              <div class="grid grid-cols-9">
                <div></div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 2</h6>
                  <p>Prepare Invoice</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 4</h6>
                  <p>Send PDF Invoice via email</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 6</h6>
                  <p>Data Entry</p>
                </div>
                <div></div>
                <div></div>
              </div>
              <img
                src="https://codetrace-bs.com.my/wp-content/uploads/2024/06/invoice-in-pdf.webp"
                alt="Paper Invoice"
                class="w-full" />
              <div class="grid grid-cols-9">
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 1</h6>
                  <p>Account Receivable</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 3</h6>
                  <p>Generate Invoice in PDF Format</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 5</h6>
                  <p>Receive PDF invoice in email</p>
                </div>
                <div></div>
                <div class="border-l-4 border-primary pl-3 w-2/3 relative left-[42%]">
                  <h6 class="font-bold !mb-2">Step 7</h6>
                  <p>Account Payable</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'

const iconlist = [
  {
    imgUrl: 'https://codetrace-bs.com.my/wp-content/uploads/2024/06/10-years-experience-1.webp',
    title: '10 Years Experience',
    containerClass: 'w-1/2 md:w-1/3 xl:w-1/5 px-4 border-r',
  },
  {
    imgUrl: 'https://codetrace-bs.com.my/wp-content/uploads/2024/04/Sustainable-Growth-1.png',
    title: 'Sustainable Growth',
    containerClass: 'w-1/2 md:w-1/3 xl:w-1/5 px-4 md:border-r',
  },
  {
    imgUrl: 'https://codetrace-bs.com.my/wp-content/uploads/2024/06/Tailored-Packages-1.webp',
    title: 'Tailored Packages',
    containerClass: 'w-1/2 md:w-1/3 xl:w-1/5 px-4 border-r',
  },
  {
    imgUrl: 'https://codetrace-bs.com.my/wp-content/uploads/2024/06/System-Consultation-1.webp',
    title: 'System Consultation',
    containerClass: 'w-1/2 md:w-1/3 xl:w-1/5 px-4 md:border-r',
  },
  {
    imgUrl: 'https://codetrace-bs.com.my/wp-content/uploads/2024/06/Referral-Success-1.webp',
    title: 'Referral Success',
    containerClass: 'w-1/2 md:w-1/3 xl:w-1/5 px-4',
  },
]

const ranges = [
  {
    imageUrl: '/ranges/accounting-business-system.svg',
    title: 'Accounting / Business System',
    description:
      'Say goodbye to tedious manual accounting processes and embrace automation with our robust accounting and business management systems.',
  },
  {
    imageUrl: '/ranges/hr-payroll-system.svg',
    title: 'HR / Payroll System',
    description:
      'With our HR and payroll systems, automate tasks such as employee scheduling, payroll processing, and performance tracking.',
  },
  {
    imageUrl: '/ranges/erp-system.svg',
    title: 'ERP System',
    description:
      'Integrate various functions such as finance, supply chain, manufacturing, and human resources into a single platform.',
  },
  {
    imageUrl: '/ranges/crm-system.svg',
    title: 'CRM System',
    description:
      'Build stronger customer relationships and drive sales growth with our customer relationship management (CRM) software.',
  },
  {
    imageUrl: '/ranges/pos-software-hardware.svg',
    title: 'POS Software & Hardware',
    description:
      'Simplify your retail operations with our intuitive POS systems designed to streamline transactions, manage inventory, and enhance customer experiences.',
  },
  {
    imageUrl: '/ranges/account-payroll-outsource.svg',
    title: 'Account & Payroll Outsource',
    description:
      'Bookkeeping, accounts payable and receivable management, payroll processing, financial reporting, tax preparation, and compliance services.',
  },
]

useSeoMeta({
  title: 'Home',
})

useHead({
  link: [{ rel: 'canonical', href: 'http://localhost:3000' }],
})
</script>
