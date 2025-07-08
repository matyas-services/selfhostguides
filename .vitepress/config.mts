import { defineConfig, HeadConfig } from 'vitepress'
// import { 
//   GitChangelog, 
//   GitChangelogMarkdownSection, 
// } from '@nolebase/vitepress-plugin-git-changelog/vite'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []
    const title = pageData.frontmatter.title || 'selfhostguides.diy';
    const description = pageData.frontmatter.description || 'Guides and resources from the selfhosting community';
    head.push(['meta', { property: 'og:title', content: title }])
    head.push(['meta', { property: 'og:description', content: description }])
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
      pattern: 'https://github.com/matyas-services/selfhostguides/edit/production/:path',
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
      {
        text: 'Self-Hosting Basics',
        items: [
          { text: 'Introduction to Self-Hosting', link: '/guides/selfhosting-basics/introduction-to-selfhosting' },
          { text: 'Self-Hosting Beginners guide', link: '/guides/selfhosting-basics/beginners-guide' },
          { text: 'Docker Beginner\'s Guide', link: '/guides/selfhosting-basics/docker-beginners' },
          { text: 'How to Set a Static IP Address', link: '/guides/selfhosting-basics/static-ip-guide' },
        ]
      },
      {
        text: 'Linux Basics',
        items: [
          { text: 'Introduction to Linux', link: '/guides/linux-basics/introduction' },
          { text: 'Linux Basics', link: '/guides/linux-basics/linux-basics' },
          { text: 'Vim Basics', link: '/guides/linux-basics/vim-guide' },
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