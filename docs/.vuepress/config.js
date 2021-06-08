module.exports = {
  base: '/vuepress-realwds-demo/',
  dest: 'dist',
  head:  require('./config/head'),
  description: '精致的五官是心动的开始，迷人的气质是动情的深渊。',
  theme: 'vuepress-theme-realwds',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Personal Website'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '个人站点'
    },
    '/jp/': {
      lang: 'ja-JP',
      title: '個人サイト'
    },
    '/kr/': {
      lang: 'ko-KR',
      title: '개인 사이트'
    },
  },
  themeConfig: {
    logo: '/img/home.png',
    // sidebarDepth: 3, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    repo: 'realwds/vuepress-realwds-demo', // 导航栏右侧生成Github链接
    repoLabel: 'GitHub',
    editLinks: true, // 启用编辑
    docsDir: 'docs', // 编辑的文件夹
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    smoothScroll: true, //页面滚动
    locales: {
      '/': {
        label: 'English',
        selectText: 'Translations',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./config/nav-en'),
        sidebar: require('./config/sidebar-en')
      },
      '/zh/': {
        label: '简体中文',
        selectText: '多语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: require('./config/nav-zh'),
        sidebar: require('./config/sidebar-zh')
      },
      '/jp/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHubでこのページを編集します',
        lastUpdated: '前回の更新',
        nav: require('./config/nav-jp'),
        sidebar: require('./config/sidebar-jp')
      },
      '/kr/': {
        label: '한국어',
        selectText: '다른 언어로 보기',
        editLinkText: 'GitHub 에서 이 페이지 를 편집 합 니 다',
        lastUpdated: '저번 업데이트',
        nav: require('./config/nav-kr'),
        sidebar: require('./config/sidebar-kr')
      }
    },  
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  markdown: {
    lineNumbers: true, // 代码行号
    config: md => {
      // use more markdown-it plugins!
      md.use(require('markdown-it-include'))
    }
  },
  plugins: [
    // nprogress顶部进度条
    ['@vuepress/nprogress'],
    // 回到顶部
    ['@vuepress/back-to-top'],
    // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    ['thirdparty-search', {
      thirdparty: [{
        title: '在Bing中搜索',
        frontUrl: 'https://cn.bing.com/search?q=',
      },
      {
        title: '在Baidu中搜索',
        frontUrl: 'https://www.baidu.com/s?ie=UTF-8&wd=',
      },
      {
        title: '在GitHub中搜索',
        frontUrl: 'https://github.com/search?q=',
      }]
    }],
    // "上次更新"时间格式
    ['@vuepress/last-updated', {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        return moment(timestamp).format('YYYY/MM/DD, hh:mm:ss')
      },
    }],
    // 代码块复制
    ['one-click-copy', {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1200, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
    // pwa支持
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        '/en/': {
          message: "New content is available",
          buttonText: "Refresh"
        },
        '/jp/': {
          message: "新しい内容が利用可能であることを発見しました",
          buttonText: "更新"
        },
        '/kr/': {
          message: "새로운 내용 을 발견 하면 사용 가능",
          buttonText: "새로 고침"
        }
      }
    }],
    // 站点简洁链接
    ['vuepress-plugin-clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/',
      notFoundPath: '/404.html',
    }]
  ]
}
