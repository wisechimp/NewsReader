import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { parse } from 'rss-to-json'
import { AxiosRequestConfig } from 'axios'

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

export default function App() {
  console.log('Hello!')
  const newsStoriesData = () => {
    return rssData = parse('https://www.svt.se/nyheter/rss.xml')
      .then(rss => {console.log(JSON.stringify(rss, null, 3))}
    }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList 
        data={newsStoriesData.items} 
        renderItem={({item}) => <Text>item.title</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
