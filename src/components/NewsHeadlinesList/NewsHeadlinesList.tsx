import { View, FlatList, Pressable } from 'react-native'

import FlatListItem from '../FlatListItem/FlatListItem'

const NewsHeadlinesList = ({ data, navigation }) => {
  
  return (
    <View> 
      <FlatList 
        data={data.items} 
        renderItem={({item}) => 
          <Pressable onPress={() => navigation.navigate('NewsArticle', { hyperlink: {item}})}>
            <FlatListItem title={item.title}/>
          </Pressable>
        }
      />
    </View>
  )
}

export default NewsHeadlinesList