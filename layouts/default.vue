<template>
  <div>
    <CustomHeader />
    <slot />
    <!-- <CustomFooter /> -->
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  description:
    'At Codetrace, we understand the evolving landscape of business operations and the increasing need for seamless digital solutions to stay competitive in today’s market. That’s why we offer a comprehensive suite of services aimed at streamlining your business processes and enhancing productivity. From point-of-sale (POS) systems to enterprise resource planning (ERP) solutions, we’ve got you covered every step of the way.',
  ogTitle: 'Codetrace Business Solution',
  ogDescription:
    'At Codetrace, we understand the evolving landscape of business operations and the increasing need for seamless digital solutions to stay competitive in today’s market. That’s why we offer a comprehensive suite of services aimed at streamlining your business processes and enhancing productivity. From point-of-sale (POS) systems to enterprise resource planning (ERP) solutions, we’ve got you covered every step of the way.',
  ogImage: 'https://codetrace-bs.com.my/wp-content/uploads/2024/04/favicon.png',
  ogUrl: 'https://codetrace.kimsiah.com',
  twitterTitle: 'Codetrace Business Solution',
  twitterDescription:
    'At Codetrace, we understand the evolving landscape of business operations and the increasing need for seamless digital solutions to stay competitive in today’s market. That’s why we offer a comprehensive suite of services aimed at streamlining your business processes and enhancing productivity. From point-of-sale (POS) systems to enterprise resource planning (ERP) solutions, we’ve got you covered every step of the way.',
  twitterImage: 'https://codetrace-bs.com.my/wp-content/uploads/2024/04/favicon.png',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: '%s - Codetrace Business Solution',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'https://codetrace-bs.com.my/wp-content/uploads/2024/04/favicon.png',
    },
  ],
})
</script>
