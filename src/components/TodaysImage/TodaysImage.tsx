import React, { FC } from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { PostImage, RootStackParams } from '../../types'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  'Detail'
>

const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>()

  const hanldeViewPress = () => {
    navigate('Detail', { title, date, url, explanation })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity style={styles.button} onPress={hanldeViewPress}>
        <Text style={styles.customButtonText}>View</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2c449d',
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 16,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,
  },
  date: {
    color: 'rgba(255,255,255,.6)',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    marginTop: 10,
    marginLeft: 10,
  },
  title: {
    marginLeft: 10,
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    alignItems: 'flex-end',
  },
  customButtonText: {
    color: 'rgb(161, 199, 255)',
    fontSize: 20,
    fontWeight: 'bold',
  },
})

export default TodaysImage
