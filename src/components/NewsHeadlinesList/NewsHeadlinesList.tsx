import React from 'react'
import { View, FlatList, Pressable } from 'react-native'

import FlatListItem from '../../components/FlatListItem/FlatListItem'
import NavigationProps from '../../types/NavigationPropsType'
import NewsStoriesData from '../../types/NewsStoriesDataType'

interface NewsHeadlinesListProps {
  navigation: NavigationProps,
  data: NewsStoriesData
}

const NewsHeadlinesList = ({ data, navigation }: NewsHeadlinesListProps) => {

  console.log(data)
  
  return (
    
      <View> 
        <FlatList 
          data={data.items} 
          renderItem={({item}) => 
            <Pressable onPress={() => navigation.navigate('NewsArticle', { newsStory: {item}})}>
              <FlatListItem title={item.title}/>
            </Pressable>
          }
        />
      </View>
    
  )
}

export default NewsHeadlinesList