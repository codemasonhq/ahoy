module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Ahoy',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Simple Docker development environments.",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'stylesheet', href: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css` }],
    ['link', { rel: 'stylesheet', href: `./styles/app.scss` }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/captain.svg',
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    showSponsor: false,
    nav: [
      // { text: 'Codemason', link: 'https://codemason.io', target:'_blank' },
    ],
    sidebar: [
      {
        title: 'Getting Started',
        collapsable: false,
        sidebarDepth: 0,
        children: [
          '/introduction',
          '/install',
          '/usage',
          '/language-packs',
          '/local-ssl',
        ]
      },
      {
        title: 'Languages & Frameworks',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          {
            title: 'PHP',
            collapsable: true,
            sidebarDepth: 1,
            children: [
              '/php/laravel'
            ]
          },
        ]
      },

      {
        title: 'Guides',
        collapsable: false,
        sidebarDepth: 0,
        children: [
            'guides/deploying-docker-to-production.md',
            'guides/running-laravel-dusk-tests-in-docker',
        ]
      },

      {
        title: 'Extending',
        collapsable: false,
        sidebarDepth: 0,
        children: [
            'extending/creating-new-language-packs'
        ]
      },

    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
