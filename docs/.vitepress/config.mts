import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AutoHPMA",
  description: "Harry Potter: Magic Awakened Automation Tool",
  srcDir: './src',
  srcExclude: ['**/README.md', '**/TODO.md'],
  lastUpdated: true,
  lang: 'zh-CN',

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
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/FelixChristian011226/AutoHPMA/blob/master/LICENSE">GPL-3.0 License</a>.',
      copyright: 'Copyright © 2025-present <a href="https://github.com/FelixChristian011226">Felix Christian</a>'
    },

    outline: {
      label: '页面导航',
      level: 'deep',
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/FelixChristian011226/AutoHPMA/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }



  }
})
