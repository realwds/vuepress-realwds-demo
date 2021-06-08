module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ['meta', {
    name: 'keywords',
    content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown',
  }],
  ['link', { rel: 'icon', href: '/logo.png' }],
  ['link', { rel: 'manifest', href: '/manifest.json' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
  ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ['link', { rel: 'stylesheet', type: 'text/css', href: '/css/jquery.fancybox.min.css' }],
  ['script', { src: '/js/jquery.slim.min.js' }],
  ['script', { src: '/js/jquery.fancybox.min.js' }]
]