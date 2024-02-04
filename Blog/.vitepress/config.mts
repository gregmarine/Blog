import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "So, I was thinking...",
  description: "Musings by Greg Marine",
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
    ],

    sidebar: [
      {
        text: 'Blog Entries',
        items: [
          {
            text: '2024',
            items: [
              {
                text: 'February',
                collapsed: true,
                items: [
                  {
                    text: 'Ensō',
                    link: '/2024/02/03_enso'
                  },
                  {
                    text: 'It\'s Going to be Okay',
                    link: '/2024/02/01_its-going-to-be-okay'
                  }
                ]
              },
              {
                text: 'January',
                collapsed: true,
                items: [
                  {
                    text: 'So, I Bought a Book',
                    link: '/2024/01/30_so-i-bought-a-book'
                  },
                  {
                    text: 'Only the Beginning',
                    link: '/2024/01/27_only-the-beginning'
                  },
                  {
                    text: 'Oh Look, the Finish Line',
                    link: '/2024/01/26_oh-look-the-finish-line'
                  },
                  {
                    text: 'Interruptions in Paradise',
                    link: '/2024/01/25_interruptions-in-paradise'
                  },
                  {
                    text: 'So Far So Good',
                    link: '/2024/01/24_so-far-so-good'
                  },
                  {
                    text: 'A Time to Every Season',
                    link: '/2024/01/23_a-time-to-every-season'
                  },
                  {
                    text: '25 Years and 2 Days',
                    link: '/2024/01/22_25-years-and-2-days'
                  },
                  {
                    text: 'I\'m Here for You',
                    link: '/2024/01/21_im-here-for-you'
                  },
                  {
                    text: 'Mostly Unplanned',
                    link: '/2024/01/20_mostly-unplanned'
                  },
                  {
                    text: 'Perhaps Acoustic Guitar',
                    link: '/2024/01/19_perhaps-acoustic-guitar'
                  },
                  {
                    text: 'Writer\'s Block Squared',
                    link: '/2024/01/18_writers-block-squared'
                  },
                  {
                    text: 'Chasing God',
                    link: '/2024/01/17_chasing-god'
                  },
                  {
                    text: 'Coffee, Paradise Freezing, and Tofu Tempura Tacos',
                    link: '/2024/01/16_coffee-paradise-freezing-and-tofu-tempura-tacos'
                  },
                  {
                    text: 'Peace, Prayer, and Proverbs 3',
                    link: '/2024/01/15_peace-prayer-and-proverbs-3'
                  },
                  {
                    text: 'Prayer, Sinkholes, and a Monorepo',
                    link: '/2024/01/14_prayer-sinkholes-and-a-monorepo'
                  },
                  {
                    text: 'Copyrights, Prayer, and 10K',
                    link: '/2024/01/13_copyrights-prayer-and-a-10k'
                  },
                  {
                    text: 'Breaking Fast',
                    link: '/2024/01/12_breaking-fast'
                  },
                  {
                    text: 'A Day of a Different Color',
                    link: '/2024/01/11_a-day-of-a-different-color'
                  },
                  {
                    text: 'Weird, Normal, and My Best',
                    link: '/2024/01/10_weird-normal-and-my-best'
                  },
                  {
                    text: 'Storms, Tacos, and Gratefulness',
                    link: '/2024/01/09_storms-tacos-and-gratefulness'
                  },
                  {
                    text: 'Best Burger Ever',
                    link: '/2024/01/08_best-burger-ever'
                  },
                  {
                    text: 'Healthier Than Last Year',
                    link: '/2024/01/07_healthier-than-last-year'
                  },
                  {
                    text: 'New Year, New Blog',
                    link: '/2024/01/05_new-year-new-blog'
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
      { icon: 'github', link: 'https://github.com/gregmarine/ByGregMarine.com/tree/main/Blog' }
    ]
  }
})
