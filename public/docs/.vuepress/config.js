module.exports = {
  title: 'Ahoy',
  description: 'Simple Docker development environments.',

  themeConfig: {
    logo: '/captain.svg',
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
    showSponsor: false,
  },

  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['link', { rel: 'dns-prefetch', href: `//fonts.gstatic.com` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Nunito` }],
    ['link', { rel: 'stylesheet', href: `https://fonts.googleapis.com/css?family=Open+Sans:300,400,600` }],
    ['link', { rel: 'stylesheet', href: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.css` }],
    ['link', { rel: 'stylesheet', href: `./styles/app.scss` }],
  ],
  serviceWorker: true
}
