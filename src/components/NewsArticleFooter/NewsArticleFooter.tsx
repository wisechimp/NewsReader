import React from "react"
import { StyleSheet, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

import FooterButton from './NewsArticleFooterButtons'


const NewsArticleFooter = () => {
  return (
    <View style={styles.container}>
      <FooterButton fontAwesomeIconName="balance-scale" />
      <FooterButton fontAwesomeIconName="star" />
      <FooterButton fontAwesomeIconName="thumbs-up"/>
      <FooterButton fontAwesomeIconName="comment" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexShrink: 1,
    flexDirection: "row",
    justifyContent: "space-around"
  }
})

export default NewsArticleFooter