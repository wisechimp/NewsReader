import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type FontAwesomeName = React.ComponentProps<typeof FontAwesome>["name"]

interface NewsArticleFooterButtonProps {
  fontAwesomeIconName: FontAwesomeName
}

const NewsArticleFooterButton = ({ fontAwesomeIconName }: NewsArticleFooterButtonProps) => {
  return(
  <FontAwesome.Button style={styles.footerButt} size={24} name={fontAwesomeIconName} iconStyle={{ marginRight: 0 }}/>
)}

const styles = StyleSheet.create({
  footerButt: {
    height: 56,
    justifyContent: 'center',
    width: 64
  }
})

export default NewsArticleFooterButton