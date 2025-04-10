import React, { FC } from 'react'
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { PostImage, RootStackParams } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>

const PostLastImage: FC<PostImage> = ({ url, title, date, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const hanldeViewPress = () => {
    navigate('Detail', { url, title, date, explanation })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={hanldeViewPress}>
          <Text style={styles.customButtonText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(20, 43, 125, 0.71)',
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 16,
    gap: 10,
    marginBottom: 10,
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  date: {
    fontSize: 16,
    color: 'rgba(206, 206, 206, 0.72)',
  },
  button: {
    alignItems: 'flex-end',
  },
  customButtonText: {
    color: 'rgb(161, 199, 255)',
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default PostLastImage
