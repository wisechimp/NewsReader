import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HeadlinesScreen from "./src/screens/Headlines/HeadlinesScreen"
import NewsArticle from "./src/screens/NewsArticle/NewsArticle"

type RootStackParamsList = {
  Headlines: undefined,
  NewsArticle: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Headlines">
        <Stack.Screen name="Headlines" component={HeadlinesScreen} />
        <Stack.Screen name="NewsArticle" component={NewsArticle} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
