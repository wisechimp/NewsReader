import { View, Text, StyleSheet } from "react-native"

interface FlatListItemProps {
  title: string
}

const FlatListItem = ({ title }: FlatListItemProps) => {
  
  return (
    <View style={styles.viewHeight}>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewHeight: {
    height: 40,
    justifyContent: 'center'
  }
})

export default FlatListItem