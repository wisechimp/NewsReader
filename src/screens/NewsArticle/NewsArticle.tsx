import * as React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

import NewsArticleFooter from '../../components/NewsArticleFooter/NewsArticleFooter'
import NavigationProps from '../../types/NavigationPropsType'

const NewsArticle = ({ navigation, route }: NavigationProps) => {
  console.log(route)
  let source = ""
  if (route) {
    source = JSON.stringify(route.params.newsStory.item.id).slice(1,-1)
  }
  console.log(source)

  return(
    <View style={{flex: 1}}>
      <WebView
        source={{ uri: source }}
        style={{flex: 1}}
      />
      <NewsArticleFooter
      />
    </View>
  )
}

export default NewsArticle