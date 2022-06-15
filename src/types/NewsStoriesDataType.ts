import NewsStoryData from './NewsStoryDataType'

interface NewsStoriesData {
  title: string,
  description: string,
  items: Array<NewsStoryData>
}

export default NewsStoriesData