import { NativeStackScreenProps } from '@react-navigation/native-stack'
import * as React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'

import NewsArticleFooter from '../../components/NewsArticleFooter/NewsArticleFooter'
import RootStackParamsList from '../../types/RootStackParamsListType'

type NewsArticleScreenProps = NativeStackScreenProps<RootStackParamsList, 'NewsArticle'>

const NewsArticle = ({ route }: NewsArticleScreenProps) => {
  console.log(route)
  let source = ""
  if (route.params) {
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