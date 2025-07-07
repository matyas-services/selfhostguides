import { defineConfig, HeadConfig } from 'vitepress'
// import { 
//   GitChangelog, 
//   GitChangelogMarkdownSection, 
// } from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    head.push(['meta', { property: 'og:title', content: pageData.frontmatter.title }])
    head.push(['meta', { property: 'og:description', content: pageData.frontmatter.description }])

    return head
  },

  title: "selfhostguides.diy",
  lang: 'en-US',
  description: "the best place for guides made by the selfhosting community",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guides', link: '/guides/basic-information/introduction' },
      { text: 'Contributing', link: '/guides/basic-information/contributing' }
    ],
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/matyas-services/selfhostguides/main/:path',
      text: 'Edit this page on GitHub'
    },

    footer: {
      message: 'Released under Creative Commons Zero v1.0 Universal License.',
    },

    sidebar: [
      {
        text: 'Basic Information',
        items: [
          { text: 'Introduction', link: '/guides/basic-information/introduction' },
          { text: 'Contributing', link: '/guides/basic-information/contributing' },
          { text: 'Style Guide', link: '/guides/basic-information/style-guide' },
          { text: 'About us', link: '/guides/basic-information/about' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/matyas-services/selfhostguides' }
    ]
  },
  // vite: { 
  //   plugins: [ 
  //     GitChangelog({ 
  //       repoURL: () => 'https://github.com/matyas-services/selfhostguides', 
  //     }), 
  //     GitChangelogMarkdownSection(), 
  //   ],
  // },
})