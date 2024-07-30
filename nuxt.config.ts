// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  typescript: {
    typeCheck: true,
  },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      titleTemplate: '%s - Codetrace Business Solution',
      meta: [
        {
          name: 'description',
          content:
            'At Codetrace, we understand the evolving landscape of business operations and the increasing need for seamless digital solutions to stay competitive in today’s market. That’s why we offer a comprehensive suite of services aimed at streamlining your business processes and enhancing productivity. From point-of-sale (POS) systems to enterprise resource planning (ERP) solutions, we’ve got you covered every step of the way.',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: 'https://codetrace-bs.com.my/wp-content/uploads/2024/04/favicon.png',
        },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
          rel: 'stylesheet',
        },
      ],
    },
  },
})
