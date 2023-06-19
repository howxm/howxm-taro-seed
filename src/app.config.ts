export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#000000',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于我',
      },
    ],
  },
  "plugins": {
    "howxm-plugin": {
      "version": "1.18.2",
      "provider": "wx37a782d0c8107a02"
    }
  },
  "usingComponents": {
    "howxm-widget": "plugin://howxm-plugin/howxm-widget"
  }
})
