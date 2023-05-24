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
  "plugins": {
    "howxm-plugin": {
      "version": "1.15.0",
      "provider": "wx37a782d0c8107a02"
    }
  },
  "usingComponents": {
    "howxm-widget": "plugin://howxm-plugin/howxm-widget"
  }
})
