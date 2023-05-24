import { Component, PropsWithChildren } from 'react'
import { requirePlugin } from '@tarojs/taro'
const howxm = requirePlugin('howxm-plugin')
import './app.scss'

class App extends Component<PropsWithChildren> {

  componentDidMount () {}

  componentDidShow () {
    howxm.debug(true)
    howxm.init(
      'eb918802-6027-4ba9-80bd-5bf4cdd69a88',
      {},
      function (data) {
        // 成功回调
        console.log('howxm.init成功回调', JSON.stringify(data))
      },
      function (err) {
        // 失败回调
        console.log('howxm.init失败回调', JSON.stringify(err))
      }
    )
  }

  componentDidHide () {}

  render () {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
