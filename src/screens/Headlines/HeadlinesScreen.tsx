import { useEffect, useState } from 'react'
import { View, FlatList } from 'react-native';
import * as rssParser from 'react-native-rss-parser'

import NewsHeadlines from '../../components/NewsHeadlinesList/NewsHeadlinesList'
import FlatListItem from '../../components/FlatListItem/FlatListItem'

interface NewsStoryData {
  title: string,
  description: string,
  link: string,
  image: string,
  pubDate: string 
}

interface NewsStoriesData {
  title: string,
  description: string,
  items: Array<NewsStoryData>
}

const HeadlinesScreen = ({ navigation }) => {

console.log('Hello!')
  const [data, setData] = useState([])

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