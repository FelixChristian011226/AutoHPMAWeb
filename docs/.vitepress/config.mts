import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoHPMA",
  description: "Harry Potter: Magic Awakened Automation Tool",
  srcDir: './src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/document/' },
      { text: '下载', link: '/download/' },
      { text: '高级', link: '/advanced/' },
    ],

    sidebar: {
      '/document/': [
        {
          text: '文档',
          items: [
            { text: '介绍', link: '/document/' },
            { text: '安装', link: '/document/install' },
            { text: '使用', link: '/document/usage' },
            { text: '功能',
              collapsed: true,
              items: [
                { text: '社团答题', link: '/document/features/clubquiz' },
                { text: '禁林探索', link: '/document/features/forbiddenforest' },
                { text: '巫师烹饪', link: '/document/features/cooking' },
                { text: '甜蜜冒险', link: '/document/features/sweetadventure' },
              ]
            },
            { text: '常见问题', link: '/document/faq' }
          ]
        }
      ],
      '/download/': [
        {
          text: '下载',
          items: [
            { text: '最新版本', link: '/download/latest' },
            { text: '历史版本', link: '/download/history' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '高级',
          items: [
            { text: '配置文件', link: '/advanced/config' },
            { text: '日志系统', link: '/advanced/logging' },
            { text: '测试功能', link: '/advanced/testing' },
          ]
        }
      ]

    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FelixChristian011226/AutoHPMA' }
    ]
  }
})
