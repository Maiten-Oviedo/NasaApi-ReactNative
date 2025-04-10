import { useRoute } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../../types'
import Header from '../../components/Header'

const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, 'Detail'>['route']>()
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(7,26,93,255)',
    flex: 1,
  },
  content: {
    backgroundColor: '#2c449d',
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: '100%',
    height: '50%',
    borderColor: '#fff',
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  date: {
    fontSize: 18,
    color: '#fff',
  },
  explanationContainer: {
    maxHeight: 200, // o ajustá según lo que necesites
    marginTop: 8,
  },
  explanation: {
    fontSize: 16,
    color: '#fff',
  },
})

export default Detail
