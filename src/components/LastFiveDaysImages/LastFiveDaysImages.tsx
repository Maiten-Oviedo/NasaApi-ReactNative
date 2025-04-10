import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { PostImage } from '../../types'
import PostLastImage from '../PostImage'

const LastFiveDaysImages = ({ postImages }: { postImages: PostImage[] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Last 5 Days </Text>
      <ScrollView style={styles.content}>
        {postImages.length > 0 &&
          postImages?.map(image => {
            return (
              <PostLastImage key={`post-image-${image.title}`} {...image} />
            )
          })}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 15,
  },
  content: {},
})

export default LastFiveDaysImages
