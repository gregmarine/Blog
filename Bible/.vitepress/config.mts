import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was praying...",
  description: "Bible Resources by Greg Marine",
  srcDir: "./src",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Last updated'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Art', link: 'https://art.bygregmarine.com', target: '_self' },
    ],

    sidebar: [
      {
        items: [
          {
            text: 'Read Me',
            link: '/read-me'
          },
          {
            text: 'Bibles',
            items: [
              {
                text: 'Unnamed',
                collapsed: true,
                items: [
                  {
                    text: 'John',
                    collapsed: true,
                    items: [
                      {
                        text: '01',
                        link: '/bible/john/01'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/bygregmarine' },
      { icon: 'instagram', link: 'https://www.instagram.com/bygregmarine/' },
      { icon: 'facebook', link: 'https://www.facebook.com/bygregmarine' },
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/tree/main/Bible' }
    ]
  }
})
