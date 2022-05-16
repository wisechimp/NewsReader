import * as React from 'react'
import { View, Text } from 'react-native'
import { WebView } from 'react-native-webview'

interface NewsArticleProps {
  link: string
}

const NewsArticle = ({ navigation, route }) => {
  console.log(route)
  const source: string = JSON.stringify(route.params.hyperlink.item.id).slice(1,-1)
  console.log(source)

  return(
    <View style={{flex: 1}}>
      <WebView
        source={{ uri: source }}
      />
    </View>
  )
}

export default NewsArticle