import React from 'react'
import { View, Text, StyleSheet } from "react-native"

interface FlatListItemProps {
  title: string
}

const FlatListItem = ({ title }: FlatListItemProps) => {
  
  return (
    <View style={styles.listItemView}>
      <Text style={styles.listItemText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemView: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    height: 64,
    justifyContent: 'center'
  },
  listItemText: {
    fontSize: 18,
    marginHorizontal: 16,
  }
})

export default FlatListItem