import React, { useEffect, useState } from 'react'
import { View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as rssParser from 'react-native-rss-parser'

import NewsHeadlines from '../../components/NewsHeadlinesList/NewsHeadlinesList'
import NewsStoriesData from '../../types/NewsStoriesDataType'
import RootStackParamsList from '../../types/RootStackParamsListType';

type HeadlinesScreenProps = NativeStackScreenProps<RootStackParamsList, 'Headlines'>

const HeadlinesScreen = ({ navigation }: HeadlinesScreenProps) => {
  const [data, setData] = useState<NewsStoriesData | undefined>(undefined)

  useEffect (() => {
    fetch('https://www.svt.se/nyheter/rss.xml')
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
          console.log(rss.items[0].title)
          setData(rss)
          return rss
        })
  },[])

  return (
    <View>
      {data &&
        <NewsHeadlines data={data} navigation={navigation}/>
      }
    </View>
  )
}

export default HeadlinesScreen