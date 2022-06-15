import React, { useEffect, useState } from 'react'
import { View, FlatList, Pressable, StyleSheet } from 'react-native'

import NewsHeadlinesListItem from '../NewsHeadlinesListItem/NewsHeadlinesListItem'
import NavigationProps from '../../types/NavigationPropsType'
import NewsStoriesData from '../../types/NewsStoriesDataType'
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton'

interface NewsHeadlinesListProps {
  navigation: NavigationProps,
  data: NewsStoriesData
}

const NewsHeadlinesList = ({ data, navigation }: NewsHeadlinesListProps) => {

  console.log(data.items)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ windowWidth, setWindowWidth ] = useState(456)

  const waitXSeconds = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  useEffect(() => {
    // setWindowWidth(window.innerWidth)
    waitXSeconds(2000).then(() => setIsLoading(false))
  }, [])
  return (
    
      <View>
        { isLoading
          ? <LoadingSkeleton
              width={windowWidth}
              height={20}
          />
          : <FlatList 
            data={data.items} 
            renderItem={({item}) => 
              <Pressable onPress={() => navigation.navigate('NewsArticle', { newsStory: {item}})}>
                <NewsHeadlinesListItem title={item.title}/>
              </Pressable>
            }
          />
        }
      </View>
    
  )
}

const styles = StyleSheet.create({
  skeletonList: {
    margin: 0
  }
})

export default NewsHeadlinesList