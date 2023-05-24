import { Component, PropsWithChildren } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { requirePlugin } from '@tarojs/taro'
const howxm = requirePlugin('howxm-plugin')
import './index.scss'

export default class Index extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = () => {
    howxm.event(
      'taro', // 必填
      function (data) {
        // 成功回调
        console.log('howxm.event成功回调', JSON.stringify(data))
      },
      function (err) {
        // 失败回调
        console.log('howxm.event失败回调', JSON.stringify(err))
      }
    )
  }

  render () {
    return (
      <View className='index'>
        <Text>Home page with howxm-widget!</Text>
        <Button onClick={this.handleClick}>trigger event</Button>
        <howxm-widget />
      </View>
    )
  }
}
