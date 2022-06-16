import React, { useEffect, useState } from 'react'
import { View, FlatList, Pressable, StyleSheet } from 'react-native'

import NewsHeadlinesListItem from '../NewsHeadlinesListItem/NewsHeadlinesListItem'
import NewsStoriesData from '../../types/NewsStoriesDataType'
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RootStackParamsList from '../../types/RootStackParamsListType'
import { useNavigation } from '@react-navigation/native'

interface NewsHeadlinesListProps {
  data: NewsStoriesData,
  navigation: NativeStackScreenProps<RootStackParamsList, 'Headlines'>
}

const NewsHeadlinesList = ({ data }: NewsHeadlinesListProps) => {
  console.log(data.items)
  const [ isLoading, setIsLoading ] = useState(true)
  const [ windowWidth, setWindowWidth ] = useState(456)
  const navigation = useNavigation()
  const skeletonData: Array<number> = []

  const waitXSeconds = (time: number) => {
    return new Promise(resolve => setTimeout(resolve, time))
  }

  const generateSkeletonData = (int: number) => {
    for (let i: number = 0; i < int; i++) {  
      skeletonData.push(i)
    }
  }
  generateSkeletonData(12)

  useEffect(() => {
    // setWindowWidth(window.innerWidth)
    waitXSeconds(2000).then(() => setIsLoading(false))
  }, [])

  return (
      <View>
        { isLoading
          ? <FlatList
              data={skeletonData}
              renderItem={({item}) =>
                <LoadingSkeleton
                  id={item}
                  width={windowWidth}
                  height={20}
                 />
              }
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

export default NewsHeadlinesList